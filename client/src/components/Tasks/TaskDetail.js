import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Services from '../../services/task.services'
import NewForm from '../NewForm'
import Dialog from '@material-ui/core/Dialog'

// import OfferForm from './OfferForm'

class TaskDetail extends Component {
	constructor(props) {
		super(props)
		this.state = { task: {}, showModal: false }
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

	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })

	render() {
		return (
			<Container>
				<Link to='/tasks'>
					<Image src={require('../../assets/images/left-arrow.svg')} style={{ width: 30 }} className='backArrowD'></Image>
				</Link>
				<article className='details'>
					<Row>
						<h3 className='allFontFamily'> {this.state.task.title} </h3>
					</Row>
					<Row>
						<p className='allFontFamily'>Details: {this.state.task.description}</p>
					</Row>
					<Row>
						<p className='allFontFamily'>Status: {this.state.task.status}</p>
					</Row>

					<hr></hr>
					<Row>
						<Col sm={1}>
							{this.state.task.creator && (
								<Image className='imgCard' style={{ width: '25px', height: '25px' }} src={this.state.task.creator.imgUrl}></Image>
							)}
						</Col>
						<Col sm={11}>
							<p className='allFontFamily'>Posted by: {this.state.task.creator && this.state.task.creator.username}</p>
						</Col>
					</Row>
					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../../assets/images/location-pin.svg')}></Image>
						</Col>
						<Col sm={11}>
							<p className='allFontFamily'>Location: {this.state.task.place && this.state.task.place.address}</p>
						</Col>
					</Row>

					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../../assets/images/money.svg')}></Image>
						</Col>
						<Col sm={11}>
							<p className='allFontFamily'>Task budget: {this.state.task.budget}€</p>
						</Col>
					</Row>

					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../../assets/images/calendar.svg')}></Image>
						</Col>
						<Col sm={11}>
							<p className='allFontFamily'> Due date: {this.state.task.date && this.state.task.date.slice(0, 10)}</p>
						</Col>
					</Row>

					<br></br>

					{this.state.task.creator && (
						<Dialog onClose={this.handleModalClose} open={this.state.showModal} className='modal-form'>
							<NewForm
								closeModal={this.handleModalClose}
								userInSession={this.props.userInSession}
								taskowner={this.state.task.creator.username}
								taskid={this.state.task._id}
							/>
						</Dialog>
					)}

					{this.props.userInSession && (
						<button className='btn-4 btn-4a' onClick={this.handleModalOpen}>
							Make an offer
						</button>
					)}
				</article>
			</Container>
		)
	}
}

export default TaskDetail
