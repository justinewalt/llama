class Sale extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='col-xs-12'>
				{this.props.date}
				{this.props.description}
				{this.props.price}
			</div>)
	}
}