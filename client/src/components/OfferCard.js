import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const OfferCard = ({ bidderusername, description, budget, _id }) => {
	console.log(_id)
	return (
		<div className='col-md-10'>
			<article className='task-card'>
				<p className='allFontFamily'>Posted by: {bidderusername}</p>
				<p className='allFontFamily'>Details: {description}</p>
				<p className='allFontFamily'>Offer: {budget}</p>

				<Link className='linklinkStyle' to={`/offer-details/${_id}`}>
					See offer
				</Link>

				<hr />
			</article>
		</div>
	)
}

export default OfferCard
