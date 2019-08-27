import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Services from '../services/task.services'

import OfferForm from './OfferForm'

class TaskDetail extends Component {
	constructor(props) {
		super(props)
		this.state = { task: {} }
		this.service = new Services()
	}

	componentDidMount() {
		this.service
			.getOneTask(this.props.match.params.id)
			.then(response => this.setState({ task: response.data }))
			.catch(err => console.log('err', err))
	}

	toogleModal = () => {
		const changed = !this.state.showModal
		this.setState({ showModal: changed })
	}

	render() {
		return (
			<div className='container'>
				<article className='coaster-detail'>
					<div className='row justify-content-center'>
						<div className='col-md-6'>
							<h1>{this.state.task.title}</h1>
							<p>
								<strong>Details:</strong> {this.state.task.description}
							</p>
							<hr />
							<p>
								<small>Task budget:</small> {this.state.task.budget} | Due date: {this.state.task.date}
							</p>
							<p>Posted by: {this.state.task.creator && this.state.task.creator.username}</p>
							<small>Status: {this.state.task.status}</small>
							<Link className='btn btn-big btn-dark' to='/tasks'>
								Back
							</Link>
							<Button variant='dark' size='sm' block>
								Make an offer
							</Button>

							{console.log(this.props.userInSession)}
							{this.state.task.creator && (
								<OfferForm
									userInSession={this.props.userInSession}
									taskowner={this.state.task.creator.username}
									taskid={this.state.task._id}
								/>
							)}
						</div>
					</div>
				</article>
			</div>
		)
	}
}

export default TaskDetail
