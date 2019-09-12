import React, { Component } from 'react'
import Services from '../../services/task.services'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import OfferCard from './OfferCard'

class OffersList extends Component {
	constructor(props) {
		super(props)
		this.state = { offers: [] }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getOffers(this.props.taskId)
			.then(response => {
				this.setState({ offers: response.data })
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<>
				<Container>
					<Row>
						<div className='row task-list'>
							{this.state.offers.map(offer => (
								<OfferCard key={offer._id} {...offer} />
							))}
						</div>
					</Row>
				</Container>
			</>
		)
	}
}

export default OffersList
