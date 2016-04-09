class Inventories extends React.Component {
	constructor(props) {
		super(props);
		this.addInventory = this.addInventory.bind(this);
		this.showInventoryForm = this.showInventoryForm.bind(this);
		this.addInventoryForm = this.addInventoryForm.bind(this);
		this.state = { inventories: this.props.inventories, showForm: false};
		this.deleteInventory = this.deleteInventory.bind(this);
	}

	addInventoryForm() {
		if(this.state.showForm) {
			return(
				<div className='col-xs-12'>
					<h5>Add New Inventory</h5>
					<form onSubmit={this.addInventory}>
						<input placeholder='name' ref='name' required={true}/>
						<input placeholder='price' ref='price' required={true}/>
						<input placeholder='description' ref='description' required={true}/>
						<button className='btn btn-primary'>Add New Inventory Stock</button>
					</form>
				</div>);
		}
	}

	showInventoryForm() {
		this.setState({showForm: !this.state.showForm});
	}

	addInventory(e) {
		e.preventDefault();
		let name = this.refs.name;
		let price = this.refs.price;
		let description = this.refs.description;
		$.ajax({
			url: '/inventories',
			type: 'POST',
			data: {inventory: {name: name.value, price: price.value, description: description.value}},
		}).success( inventory => {
			this.setState({inventories: [inventory, ...this.state.inventories]});
		}).fail(error => {
			alert(error);
		}).complete( () => {
			name.value = null;
			price.value = null;
			description.value = null;
		});
	}

	deleteInventory(id) {
		$.ajax({
			url: `/inventories/${id}`,
			type: 'DELETE'
		}).success( inventory => {
			let inventories = this.state.inventories;
			let index = inventories.findIndex( s => s.id === inventory.id );
			inventories.splice(index, 1);
			this.setState({inventory});
		})
	}

	render () {
		let inventories = this.state.inventories.map( inventory => {
			return(<Inventory key={`inventory-${inventory.id}`} {...inventory} delete={this.deleteInventory}/>)
		});
	 	return(
	 		<div className='container'>
	 			<div className='row'>
	 				<h3>Inventory</h3>
	 				<button className='btn btn-primary' onClick={this.showInventoryForm}>Add New</button>
			 		{this.addInventoryForm()} 
			 		<table className='table table-striped table-hover'>
			 		<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
	 					{inventories}
	 				</tbody>
	 				</table>
	 			</div>
	 		</div>)
		
	}
}