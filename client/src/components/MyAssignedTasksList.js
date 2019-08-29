import React, { Component } from 'react'
import Services from '../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import LoggedInNavBar from './LoggedInNavBar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MyAssignedTasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateMyList()

	updateMyList = () => {
		this.services
			.getMyTasks()
			.then(response => response.data.filter(task => task.status === 'ASSIGNED'))
			.then(response => this.setState({ tasks: response }))
			.catch(err => console.log(err))
	}

	render() {
		if (this.state.tasks.length === 0) {
			return (
				<>
					<LoggedInNavBar />
					<h3>Looks like you haven’t posted a task. How about posting one now?</h3>
					<Link to='/postTask'>Post a task</Link>
				</>
			)
		} else {
			return (
				<>
					<Container>
						<Row>
							<Col>
								<LoggedInNavBar />
							</Col>
						</Row>
						<Row>
							<h1>Assigned tasks</h1>
						</Row>
						<Row>
							{this.state.tasks.map(task => (
								<MyTaskCard key={task._id} {...task} />
							))}
						</Row>
					</Container>
				</>
			)
		}
	}
}

export default MyAssignedTasksList
