import React, { Component } from 'react'
import Services from '../../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import LoggedInNavBar from '../LoggedInNavBar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

class MyAssignedTasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: undefined }
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
		if (this.state.tasks) {
			return this.state.tasks.length === 0 ? (
				<>
					<Container>
						<Row-text-center>
							<h4 className='allFontFamily centeralign'>
								Looks like you haven’t assigned any tasks.<br></br>
							</h4>
						</Row-text-center>
					</Container>
				</>
			) : (
				<>
					<Container>
						<Row>
							<h4 className='allFontFamily'>Assigned tasks</h4>
						</Row>
						<br></br>
						<Row>
							{this.state.tasks.map(task => (
								<Col md={{ span: 5, offset: 1 }}>
									<MyTaskCard key={task._id} {...task} />
								</Col>
							))}
						</Row>
					</Container>
				</>
			)
		} else {
			return <Spinner style={{ display: 'block', margin: '0 auto', marginTop: 300 }} animation='border' />
		}
	}
}

export default MyAssignedTasksList
