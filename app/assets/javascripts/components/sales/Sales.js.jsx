class Sales extends React.Component {
	constructor(props) {
		super(props);
		this.addSale = this.addSale.bind(this);
		this.showSaleForm = this.showSaleForm.bind(this);
		this.addSaleForm = this.addSaleForm.bind(this);
		this.state = { sales: this.props.sales, showForm: false};
	}

	addSaleForm() {
		if(this.state.showForm) {
			return(
				<div className='col-xs-12'>
					<h5>Add New Sale</h5>
					<form onSubmit={this.addSale}>
						<input placeholder='date' ref='date' required={true}/>
						<input placeholder='description' ref='description' required={true}/>
						<input placeholder='price' ref='price' required={true}/>
						<button className='btn btn-primary'/>
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

	render () {
	 	return(
	 		<div className='container'>
	 			<div className='row'>
	 				<h5 onClick={this.showSaleForm}>Sales</h5>
	 			</div>
	 		{this.addSaleForm()} 
	 		</div>)
		
	}
}