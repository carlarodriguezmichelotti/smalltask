import React, { Component } from 'react'
import Services from '../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import LoggedInNavBar from './LoggedInNavBar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class TasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateMyList()

	updateMyList = () => {
		this.services
			.getMyTasks()
			.then(response => this.setState({ tasks: response.data }))
			.catch(err => console.log(err))
	}

	// showPostedTasks = () => {
	// 	this.services
	// 		.getMyTasks()
	// 		.then(response => response.data.filter(task => task.status === 'OPEN'))
	// 		.then(response => this.setState({ tasks: response }))
	// 		.catch(err => console.log(err))
	// }

	// showMyTasks = () => {
	// 	this.updateMyList()
	// }

	// showAssignedTasks = () => {
	// 	this.services
	// 		.getMyTasks()
	// 		.then(response => response.data.filter(task => task.status === 'ASSIGNED'))
	// 		.then(response => this.setState({ tasks: response }))
	// 		.catch(err => console.log(err))
	// }
	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })
	handleToastOpen = () => this.setState({ showToast: true })
	handleToastClose = () => this.setState({ showToast: false })

	render() {
		if (this.state.tasks.length === 0) {
			return (
				<>
					<Container>
						<Row>
							<LoggedInNavBar />
						</Row>
						<Row>
							<h3>Looks like you haven’t posted a task. How about posting one now?</h3>
						</Row>
						<Link to='/postTask'>Post a task</Link>
					</Container>
				</>
			)
		} else {
			return (
				<>
					<Container>
						<Row>
							<LoggedInNavBar />
						</Row>

						<Row>
							<h1>All tasks</h1>
						</Row>

						<Row>
							{this.state.tasks.map(task => (
								<MyTaskCard key={task._id} {...task} user={this.props.user} />
							))}
						</Row>
					</Container>
				</>
			)
		}
	}
}

export default TasksList
