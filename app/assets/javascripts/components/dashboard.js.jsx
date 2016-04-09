class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.showSalesComp = this.showSalesComp.bind(this);
		this.showTasksComp = this.showTasksComp.bind(this);
		this.showInventoriesComp = this.showInventoriesComp.bind(this);
		this.state = { view: null};
	}

	showSalesComp() {
		this.setState({view: "sales"});
	}

	showTasksComp() {
		this.setState({view: "tasks"});
	}

	showInventoriesComp() {
		this.setState({view: "inventories"});
	}

	view() {
		if (this.state.view === "sales") {
		  return(<Sales sales={this.props.sales} />);
		} else if (this.state.view === "tasks") {
		  return(<Tasks tasks={this.props.tasks} />);
		} else if (this.state.view === "inventories") {
		  return(<Inventories inventories={this.props.inventories} />);
		}
	}

	render () {
		return(
			<div className="container center">
				<div className="row">
					<button onClick= {this.showSalesComp} className="btn btn-default">Sales</button>
					<button onClick= {this.showTasksComp} className="btn btn-default">Tasks</button>
					<button onClick= {this.showInventoriesComp} className="btn btn-default">Inventory</button>
				</div>
				{this.view()}
			</div>)
	}
}