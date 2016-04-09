class Sales extends React.Component {
	constructor(props) {
		super(props);
		this.addSale = this.addSale.bind(this);
	}

	addSale(sale) {
		this.setState({sale: [sale, ...this.state.sales]});
	}

	render () {
	 	return(
	 		<div className='container'>
	 			<div className='row'>
	 				<h5>Sales</h5>
	 			</div>
	 		</div>) 
		
	}
}