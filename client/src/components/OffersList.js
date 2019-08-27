import React, { Component } from 'react'
import Services from '../services/task.services'

import OfferCard from './OfferCard'

class OffersList extends Component {
	constructor() {
		super()
		this.state = { offers: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getOffers()
			.then(response => this.setState({ offers: response.data }))
			.catch(err => console.log(err))
	}

	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })
	handleToastOpen = () => this.setState({ showToast: true })
	handleToastClose = () => this.setState({ showToast: false })

	render() {
		return (
			<>
				<div className='container'>
					<h1>Listado de offers</h1>

					{this.props.userInSession}

					<div className='row task-list'>
						{this.state.offers.map(offer => (
							<OfferCard key={offer._id} {...offer} />
						))}
					</div>
				</div>
			</>
		)
	}
}

export default OffersList
