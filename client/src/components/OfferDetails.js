import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Services from '../services/task.services'

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
			<div className='container'>
				<article>
					{console.log(this.state.offer)}
					<h1>Review offer</h1>
					<h2>{this.state.offer.bidder.username}</h2>
					<p>OFFER: {this.state.offer.budget}</p>
					<p>DESCRIPTION: {this.state.offer.description}</p>
				</article>

				{/* <button
					onClick={() => {
						this.service.deleteOffer(this.state.offer.taskid, this.state.offer.bidderid), this.redirectToTaskOffers()
					}}
				>
					Accept Offer
				</button> */}

				<button onClick={() => this.handleOfferClick()} offerinfo={this.state.offer}>
					{' '}
					Accept Offer{' '}
				</button>
			</div>
		) : (
			<p>Waiting for the offer~~~</p>
		)
	}
}

export default OfferDetails
