import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Services from '../services/task.services'
import OfferFormModal from './OfferFormModal'

// import OfferForm from './OfferForm'

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

	smClose = () => this.setState({ smShow: false })
	render() {
		// let lgClose = () => this.setState({ lgShow: false })

		return (
			<div className='container'>
				<article>
					<div className='row justify-content-center'>
						<div className='col-md-6'>
							<Link to='/tasks'>
								<Image src={require('../left-arrow.svg')} style={{ width: 30 }} className='backArrowD'></Image>
							</Link>
							<h3 className='allFontFamily'> {this.state.task.title} </h3>
							<p className='allFontFamily'>Details: {this.state.task.description}</p>
							<hr />
							<p className='allFontFamily'>Posted by: {this.state.task.creator && this.state.task.creator.username}</p>
							<p className='allFontFamily'>Location: {this.state.task.place && this.state.task.place.address}</p>
							<p className='allFontFamily'>Task budget: {this.state.task.budget}</p>

							<p className='allFontFamily'> Due date: {this.state.task.date && this.state.task.date.slice(0, 10)}</p>
							<small className='allFontFamily'>Status: {this.state.task.status}</small>

							<Button onClick={() => this.setState({ smShow: true })} id='botonTaskForm' className='btn' size='sm' block>
								Make an offer
							</Button>
							{console.log(this.props.userInSession)}
							{this.state.task.creator && (
								<OfferFormModal
									show={this.state.smShow}
									smClose={this.smClose}
									setUser={this.props.setUser}
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
