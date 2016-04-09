class Inventory extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
						<tr>
							<td>{this.props.name}</td>
							<td>{this.props.price}</td>
							<td>{this.props.description}</td>
							<td>
								<button onClick={ () => this.props.delete(this.props.id)} className='btn btn-secondary'>Delete</button>
							</td>
						</tr>)
	}
}