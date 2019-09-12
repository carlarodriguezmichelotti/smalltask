import React, { Component } from 'react'
import Services from '../../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

class TasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: undefined } // showModal: false, showToast: false }
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
		if (this.state.tasks) {
			return this.state.tasks.length === 0 ? (
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
			) : (
				<>
					<Container>
						<Row className='text-center'>
							<h4 className='allFontFamily'>All tasks posted by you</h4>
						</Row>
						<br></br>
						<Row>
							{this.state.tasks.map(task => (
								<Col md={{ span: 5, offset: 1 }}>
									<MyTaskCard key={task._id} {...task} user={this.props.user} />
								</Col>
							))}
						</Row>
						<br></br>
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
}

export default TasksList
