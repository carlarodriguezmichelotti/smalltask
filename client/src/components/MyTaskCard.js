import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/task.services'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import OffersListModal from './OffersListModal'

class MyTaskCard extends Component {
	constructor(props) {
		super(props)
		this.state = { showModal: false }
		this.service = new Services()
	}
	// componentDidMount() {
	// 	this.servicesmShow
	// 		.getOneTask(this.props.key)
	// 		.then(response => this.setState({ task: response.data }))
	// 		.catch(err => console.log('err', err))
	// }
	toogleModal = () => {
		const changed = !this.state.showModal
		this.setState({ showModal: changed })
	}

	render() {
		let smClose = () => this.setState({ showModal: false })
		if (this.props.status === 'OPEN') {
			return (
				<>
					<Card
						id='mycardstyle'
						className='taskCardInfo'
						border='success'
						style={{ width: '23rem', height: '19rem', borderRadius: 3 }}
					>
						<Card.Body className='taskCardInfo'>
							<Card.Title>{this.props.title}</Card.Title>
							<Card.Text className='taskCardInfo'>Details: {this.props.description}</Card.Text>
							<Card.Text className='taskCardInfo'>Date: {this.props.date.slice(0, 10)}</Card.Text>
							<Card.Text className='taskCardInfo'>Budget: {this.props.budget}€</Card.Text>
							<Button onClick={() => this.setState({ showModal: true })} variant='dark' size='sm' block>
								See Offers
							</Button>
						</Card.Body>
						<Card.Footer>{this.props.status}</Card.Footer>
					</Card>
					<OffersListModal user={this.props.user} show={this.state.showModal} onHide={smClose} taskid={this.props._id} />
					<br></br>
				</>
			)
		} else {
			return (
				<>
					<Card id='mycardstyle' className='taskCardInfo' border='dark' style={{ width: '23rem', borderRadius: 3 }}>
						<Card.Header className='taskCardInfo'>
							{' '}
							<b>{this.props.status}</b>
						</Card.Header>
						<Card.Body className='taskCardInfo'>
							<Card.Text className='assignedBudget text-center taskCardInfo'>
								{' '}
								<b>{this.props.budget}</b>{' '}
								<Image src={require('../euros.svg')} style={{ width: '30px', height: '30px' }} className='cardImage' />
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Details:</b> {this.props.title}
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Task assigned to:</b> {this.props.assignedto}
							</Card.Text>
							<Button variant='dark' size='sm' block>
								Send a message to tasker
							</Button>
						</Card.Body>
					</Card>

					<OffersListModal taskid={this.props._id} user={this.props.user} show={this.state.showModal} onHide={smClose} />
					<br></br>
				</>
			)
		}
	}
	// const MyTaskCard = ({ title, description, budget, _id, date, status }) => {
	// 	if (status === 'OPEN') {
	// 		return (
	// 			<>
	// 				<Card border='success' style={{ width: '21rem', borderRadius: 3 }} className='taskCardStyle'>
	// 					<Card.Body>
	// 						<Card.Title>
	// 							<b>{title}</b>
	// 						</Card.Title>
	// 						<Card.Text className='taskCardInfo'>{description}</Card.Text>
	// 						<Card.Text className='taskCardInfo'>{date.slice(0, 10)}</Card.Text>
	// 						<Card.Text className='taskCardInfo'>{budget}</Card.Text>
	// 						<Link to={`/task-offers`}>
	// 							<Button variant='dark' size='sm' block>
	// 								See Offers
	// 							</Button>
	// 						</Link>
	// 					</Card.Body>
	// 					<Card.Footer>{status}</Card.Footer>
	// 				</Card>

	// 				<OffersListModal taskid={_id} />
	// 				<br></br>
	// 			</>
	// 		)
	// 	} else {
	// 		return (
	// 			<>
	// 				<Card border='dark' style={{ width: '21rem' }}>
	// 					<Card.Body>
	// 						<Card.Title>{title}</Card.Title>

	// 						<Link to={`/task-offers`}>
	// 							<Button variant='dark' size='sm' block>
	// 								See Offers
	// 							</Button>
	// 						</Link>
	// 					</Card.Body>
	// 					<Card.Footer>{status}</Card.Footer>
	// 				</Card>

	// 				<br></br>
	// 			</>
	// 		)
	// 	}
}

export default MyTaskCard
