import React, { Component } from 'react'
import Services from '../../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import LoggedInNavBar from '../LoggedInNavBar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MyOpenTasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] }
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

	render() {
		return (
			<>
				<Container>
					<Row>
						<h4>Open tasks</h4>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							{this.state.tasks && this.state.tasks.map(task => <MyTaskCard key={task._id} {...task} />)}
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default MyOpenTasksList
