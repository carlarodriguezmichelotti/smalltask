import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/task.services'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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
					<Card border='success' style={{ width: '21rem', borderRadius: 3 }} className='taskCardStyle'>
						<Card.Body>
							<Card.Title>{this.props.title}</Card.Title>
							<Card.Text className='taskCardInfo'>{this.props.description}</Card.Text>
							<Card.Text className='taskCardInfo'>{this.props.date.slice(0, 10)}</Card.Text>
							<Card.Text className='taskCardInfo'>{this.props.budget}</Card.Text>
							<Button onClick={() => this.setState({ showModal: true })} variant='dark' size='sm' block>
								See Offers
							</Button>
						</Card.Body>
						<Card.Footer>{this.props.status}</Card.Footer>
					</Card>

					<OffersListModal user={this.props.user} show={this.state.showModal} onHide={smClose} taskid={this.state._id} />
					<br></br>
				</>
			)
		} else {
			return (
				<>
					<Card border='dark' style={{ width: '21rem' }}>
						<Card.Body>
							<Card.Title>{this.props.title}</Card.Title>

							{/* <Button onClick={() => this.setState({ showModal: true })} variant='dark' size='sm' block>
								See Offers
							</Button> */}
						</Card.Body>
						<Card.Footer>{this.props.status}</Card.Footer>
					</Card>

					<OffersListModal user={this.props.user} show={this.state.showModal} onHide={smClose} taskid={this.state._id} />
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
