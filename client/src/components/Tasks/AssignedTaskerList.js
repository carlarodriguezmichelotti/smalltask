import React, { Component } from 'react'
import Services from '../../services/task.services'
import AssignedTaskerCard from './AssignedTaskerCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

class AssignedTaskerList extends Component {
	constructor(props) {
		super(props)
		this.state = { tasks: [] }
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
		if (this.state.tasks) {
			return this.state.tasks.length === 0 ? (
				<>
					<Container>
						<Row>
							<h4 className='allFontFamily'>Tasks assigned to you</h4>
						</Row>
						<br></br>
						<Row-text-center>
							<h4 className='allFontFamily centeralign'>
								You haven't been assigned any tasks yet<br></br>
							</h4>
						</Row-text-center>
					</Container>
				</>
			) : (
				<>
					<Container>
						<Row>
							<h4>Tasks assigned to you</h4>
						</Row>
						<br></br>
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
		} else {
			return (
				<Spinner
					style={{ display: 'block', margin: '0 auto', marginTop: 300 }}
					className='spinnerStyle'
					animation='border'
				></Spinner>
			)
		}
	}
	// render() {
	// 	return (
	// 		<>
	// 			<Container>
	// 				<Row>
	// 					<h4>Tasks assigned to you</h4>
	// 				</Row>

	// 				<Row>
	// 					<Col md={{ span: 6, offset: 3 }}>
	// 						{this.state.tasks.map(task => (
	// 							<AssignedTaskerCard key={task._id} {...task} />
	// 						))}
	// 					</Col>
	// 				</Row>
	// 			</Container>
	// 		</>
	// 	)
	// }
}
export default AssignedTaskerList
