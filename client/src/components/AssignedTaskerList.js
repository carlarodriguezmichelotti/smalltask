import React, { Component } from 'react'
import Services from '../services/task.services'
import AssignedTaskerCard from './AssignedTaskerCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
				<Container>
					<Row>
						<h4>Tasks assigned to you</h4>
					</Row>

					{/* {this.props.userInSession.data.username} */}
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							{this.state.tasks.map(task => (
								<AssignedTaskerCard key={task._id} {...task} />
							))}
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}
export default AssignedTaskerList
