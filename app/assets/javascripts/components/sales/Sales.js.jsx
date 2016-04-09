class Sales extends React.Component {
	constructor(props) {
		super(props);
		this.addSale = this.addSale.bind(this);
		this.showSaleForm = this.showSaleForm.bind(this);
		this.addSaleForm = this.addSaleForm.bind(this);
		this.state = { sales: this.props.sales, showForm: false};
		this.deleteSale = this.deleteSale.bind(this);
	}

	addSaleForm() {
		if(this.state.showForm) {
			return(
				<div className='col-xs-12'>
					<form onSubmit={this.addSale}>
						<input type='date' placeholder='date' ref='date' required={true}/>
						<input placeholder='description' ref='description' required={true}/>
						<input placeholder='price' ref='price' required={true}/>
						<button className='btn btn-primary'>Add New Sale</button>
					</form>
				</div>);
		}
	}

	showSaleForm() {
		this.setState({showForm: !this.state.showForm});
	}

	addSale(e) {
		e.preventDefault();
		let date = this.refs.date;
		let description = this.refs.description;
		let price = this.refs.price;
		$.ajax({
			url: '/sales',
			type: 'POST',
			data: {sale: {date: date.value, description: description.value, price: price.value}},
		}).success( sale => {
			this.setState({sales: [sale, ...this.state.sales]});
		}).fail(error => {
			alert(error);
		}).complete( () => {
			date.value = null;
			description.value = null;
			price.value = null;
		});
	}

	deleteSale(id) {
		$.ajax({
			url: `/sales/${id}`,
			type: 'DELETE'
		}).success( sale => {
			let sales = this.state.sales;
			let index = sales.findIndex( s => s.id === sale.id );
			sales.splice(index, 1);
			this.setState({sales});
		})
	}

	render () {
		let sales = this.state.sales.map( sale => {
			return(<Sale key={`sale-${sale.id}`} {...sale} delete={this.deleteSale}/>)
		});
	 	return(
	 		<div className='container'>
	 			<div className='row'>
	 				<h3>Sales</h3>
	 				<button className='btn btn-primary' onClick={this.showSaleForm}>Add New</button>
			 		{this.addSaleForm()} 
			 		<table className='table table-striped table-hover'>
				 		<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
	 						{sales}
	 					</tbody>
	 				</table>
	 			</div>
	 		</div>)
		
	}
}