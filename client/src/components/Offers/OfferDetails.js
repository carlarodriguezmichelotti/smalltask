import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Services from '../../services/task.services'
import axios from 'axios'

class OfferDetails extends Component {
	constructor(props) {
		super(props)
		this.state = { offer: null }
		this.service = new Services()
	}

	componentDidMount() {
		console.log(this.props.match)
		this.service
			.getOneOffer(this.props.match.params.id)
			.then(response => this.setState({ offer: response.data }))
			.catch(err => console.log('err', err))
	}

	redirectToTaskOffers = () => {
		const { history } = this.props
		if (history) {
			history.push('/assigned-tasks')
		}
	}

	handleOfferClick = () => {
		this.service
			.deleteOffer(this.state.offer.taskid, this.state.offer.bidderid)
			.then(this.redirectToTaskOffers())
			.catch(err => console.log('Error', err))
	}

	toogleModal = () => {
		const changed = !this.state.showModal
		this.setState({ showModal: changed })
	}

	render() {
		return this.state.offer ? (
			<>
				<article className='allFontFamily'>
					<Container>
						<h1 style={{ textAlign: 'center', fontSize: 35 }}>Review offer</h1>
						<Row style={{ marginLeft: 60 }}>
							<Col sm={1}>
								<Image className='cardImage' src={require('../../assets/images/user.svg')}></Image>
							</Col>

							<Col sm={11}>
								<p className='allFontFamily'>Posted by: {this.state.offer.bidder.username}</p>
							</Col>
						</Row>

						<Row style={{ marginLeft: 60 }}>
							<Col sm={1}>
								<Image className='cardImage' src={require('../../assets/images/speech-bubble.svg')}></Image>
							</Col>

							<Col sm={11}>
								<p className='allFontFamily'>Details: {this.state.offer.description}</p>
							</Col>
						</Row>

						<Row style={{ marginLeft: 60 }}>
							<Col sm={1}>
								<Image className='cardImage' src={require('../../assets/images/money.svg')}></Image>
							</Col>

							<Col sm={11}>
								<p className='allFontFamily'>Offer: {this.state.offer.budget}€</p>
							</Col>
						</Row>
					</Container>
				</article>

				<button style={{ marginLeft: 135 }} onClick={() => this.handleOfferClick()} offerinfo={this.state.offer}>
					{' '}
					Accept Offer{' '}
				</button>
			</>
		) : (
			<p>Waiting for the offer</p>
		)
	}
}

export default OfferDetails
