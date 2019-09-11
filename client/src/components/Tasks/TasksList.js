import React, { Component } from 'react'
import Services from '../../services/task.services'
import TaskCard from './TaskCard'
import GoogleApiWrapper from '../Map'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

class TasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getTasks()
			.then(response => this.setState({ tasks: response.data, ready: true }))
			.catch(err => console.log(err))
	}

	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })
	handleToastOpen = () => this.setState({ showToast: true })
	handleToastClose = () => this.setState({ showToast: false })

	render() {
		return this.state.tasks.length > 0 ? (
			<>
				<Container>
					<Row>
						<br />
						<br />
						<div data-spy='scroll'>
							<Col sm={12} className='taskListSB'>
								{this.props.userInSession}

								{this.state.tasks.map(task => (
									<TaskCard creatorname={task.creator.username} creatorimage={task.creator.imgUrl} key={task._id} {...task} />
								))}
							</Col>
						</div>

						<Col>
							<GoogleApiWrapper tasks={this.state.tasks} />
						</Col>
					</Row>
				</Container>
			</>
		) : (
				<Spinner animation='border' style={{ display: 'block', margin: '0 auto' }} />
		)
	}
}

export default TasksList
