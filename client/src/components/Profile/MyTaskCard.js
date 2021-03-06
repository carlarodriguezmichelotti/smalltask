import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../../services/task.services'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import OffersListModal from './../Offers/OffersListModal'

class MyTaskCard extends Component {
	constructor(props) {
		super(props)
		this.state = { showModal: false }
		this.service = new Services()
	}

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
						<Card.Header className='taskCardInfo'>
							{' '}
							<b>{this.props.status}</b>
						</Card.Header>
						<Card.Body className='text-center taskCardInfo'>
							<Card.Title>
								<b>{this.props.title}</b>
							</Card.Title>
							<Card.Text className='text-center taskCardInfo'>
								<b>Details:</b> {this.props.description}
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Date: </b>
								{this.props.date.slice(0, 10)}
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Budget:</b> {this.props.budget}€
							</Card.Text>
							<br />
							<br />
							<Button
								style={{ width: 200, marginLeft: 60 }}
								id='botonTaskForm'
								onClick={() => this.setState({ showModal: true })}
								size='sm'
								block
							>
								See Offers
							</Button>
						</Card.Body>
					</Card>
					<OffersListModal user={this.props.user} show={this.state.showModal} onHide={smClose} taskid={this.props._id} />
					<br></br>
				</>
			)
		} else {
			return (
				<>
					<Card
						id='mycardstyle'
						className='taskCardInfo'
						border='dark'
						style={{ width: '23rem', height: '19rem', borderRadius: 3 }}
					>
						<Card.Header className='taskCardInfo'>
							{' '}
							<b>{this.props.status}</b>
						</Card.Header>
						<Card.Body className='taskCardInfo'>
							<Card.Text className='assignedBudget text-center taskCardInfo'>
								{' '}
								<b>{this.props.budget}</b>{' '}
								<Image
									src={require('../../assets/images/euros.svg')}
									style={{ width: '30px', height: '30px' }}
									className='cardImage'
								/>
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Details:</b> {this.props.title}
							</Card.Text>
							<Card.Text className='text-center taskCardInfo'>
								<b>Task assigned to:</b> {this.props.assignedto}
							</Card.Text>
							<br />
							<br />
							<Button style={{ width: 200, marginLeft: 60 }} id='botonTaskForm' size='sm' block>
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
}

export default MyTaskCard
