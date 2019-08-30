import React, { Component } from 'react'
import Services from '../services/task.services'
import AssignedTaskerCard from './AssignedTaskerCard'

class AssignedTaskerList extends Component {
	constructor(props) {
		super(props)
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		console.log(this.props.userInSession)
		this.services
			.getAssignedTasks()
			.then(response => {
				console.log(response.data.filter(task => task.assignedto === this.props.userInSession.data.username))
				return response.data.filter(task => task.assignedto === this.props.userInSession.data.username)
			})
			.then(response => this.setState({ tasks: response }))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<>
				<h1>Assigned As Tasker</h1>
				{/* {this.props.userInSession.data.username} */}

				{this.state.tasks.map(task => (
					<AssignedTaskerCard key={task._id} {...task} />
				))}
			</>
		)
	}
}
export default AssignedTaskerList
