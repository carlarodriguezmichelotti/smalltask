import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const OfferCard = ({ bidderusername, description, budget, _id }) => {
	return (
		<div className='col-md-12'>
			<article className='offerCard'>
				<Container>
					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../user.svg')}></Image>
						</Col>

						<Col sm={11}>
							<p className='allFontFamily'>Posted by: {bidderusername}</p>
						</Col>
					</Row>

					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../speech-bubble.svg')}></Image>
						</Col>

						<Col sm={11}>
							<p className='allFontFamily'>Details: {description}</p>
						</Col>
					</Row>
				</Container>

				<p className='allFontFamily'>Offer: {budget}€</p>

				<Link className='linklinkStyle' to={`/offer-details/${_id}`}>
					See offer
				</Link>

				<hr />
			</article>
		</div>
	)
}

export default OfferCard
