import React, { Component } from 'react'
import Services from '../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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

	render() {
		if (this.state.tasks.length === 0) {
			return (
				<>
					<Container>
						<Row-text-center>
							<h4 className='allFontFamily centeralign'>
								Looks like you haven’t posted a task.<br></br> How about posting one now?
							</h4>
						</Row-text-center>
						<Button btn btn-dark id='botones' className='centerthebutton'>
							<Link id='linkss' to='/postTask'>
								Post a task
							</Link>
						</Button>
					</Container>
				</>
			)
		} else {
			return (
				<>
					<Container>
						<Row className='text-center'>
							<h4>All tasks posted by you</h4>
						</Row>

						<Row>
							<Col md={{ span: 6, offset: 3 }}>
								{this.state.tasks.map(task => (
									<MyTaskCard key={task._id} {...task} user={this.props.user} />
								))}
							</Col>
						</Row>
						<br></br>
					</Container>
				</>
			)
		}
	}
}

export default TasksList
