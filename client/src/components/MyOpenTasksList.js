import React, { Component } from 'react'
import Services from '../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import LoggedInNavBar from './LoggedInNavBar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MyOpenTasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateMyList()

	updateMyList = () => {
		this.services
			.getMyTasks()
			.then(response => response.data.filter(task => task.status === 'OPEN'))
			.then(response => this.setState({ tasks: response }))
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

	render() {
		return (
			<>
				<Container>
					{/* <Row>
							<LoggedInNavBar />
						</Row> */}

					<Row>
						<h1>Open tasks</h1>
					</Row>
					<Row>{this.state.tasks && this.state.tasks.map(task => <MyTaskCard key={task._id} {...task} />)}</Row>
				</Container>
			</>
		)
	}
}

export default MyOpenTasksList
