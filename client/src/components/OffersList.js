import React, { Component } from 'react'
import Services from '../services/task.services'

import OfferCard from './OfferCard'

class OffersList extends Component {
	constructor(props) {
		super(props)
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

	render() {
		return (
			<>
				<div className='container'>
					<h1>Listado de offers</h1>

					{this.props.userInSession.username}

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
