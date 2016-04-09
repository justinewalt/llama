class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.addTask = this.addTask.bind(this);
		this.showTaskForm = this.showTaskForm.bind(this);
		this.addTaskForm = this.addTaskForm.bind(this);
		this.state = { tasks: this.props.tasks, showForm: false};
		this.deleteTask = this.deleteTask.bind(this);
	}

	addTaskForm() {
		if(this.state.showForm) {
			return(
				<div className='col-xs-12'>
					<form onSubmit={this.addTask}>
						<input type='date' placeholder='date' ref='date' required={true}/>
						<input placeholder='description' ref='description' required={true}/>
						<button className='btn'>Add New Task</button>
					</form>
				</div>);
		}
	}

	showTaskForm() {
		this.setState({showForm: !this.state.showForm});
	}

	addTask(e) {
		e.preventDefault();
		let date = this.refs.date;
		let description = this.refs.description;
		let completed = this.refs.completed;
		$.ajax({
			url: '/tasks',
			type: 'POST',
			data: {task: {date: date.value, description: description.value}},
		}).success( task => {
			this.setState({tasks: [task, ...this.state.tasks]});
		}).fail(error => {
			alert(error);
		}).complete( () => {
			date.value = null;
			description.value = null;
			completed.value = null;
		});
	}

	deleteTask(id) {
		$.ajax({
			url: `/tasks/${id}`,
			type: 'DELETE'
		}).success( task => {
			let tasks = this.state.tasks;
			let index = tasks.findIndex( s => s.id === task.id );
			tasks.splice(index, 1);
			this.setState({tasks});
		})
	}

	render () {
		let tasks = this.state.tasks.map( task => {
			return(<Task key={`task-${task.id}`} {...task} delete={this.deleteTask}/>)
		});
	 	return(
	 		<div className='container'>
	 			<div className='row'>
	 				<h3>Tasks</h3>
	 				<button className='btn btn-primary' onClick={this.showTaskForm}>Add New</button>
	 				{this.addTaskForm()} 
			 		<table className='table table-striped table-hover'>
				 		<thead>
							<tr>
								<th>Description</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
	 						{tasks}
	 					</tbody>
	 				</table>
	 			</div>
	 		</div>)
		
	}
}