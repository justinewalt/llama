class Sale extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
					<tr>
						<td>{this.props.date}</td>
						<td>{this.props.description}</td>
						<td>{this.props.price}</td>
						<td>
							<button onClick={ () => this.props.delete(this.props.id)} className='btn btn-secondary'>Delete</button>
						</td>
					</tr>)
	}
}
