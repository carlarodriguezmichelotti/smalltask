import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const OfferCard = ({ bidderusername, description, budget, _id }) => {
	console.log(_id)
	return (
		<div className='col-md-3'>
			<article className='task-card'>
				<p>Posted by: {bidderusername}</p>
				<p>{description}</p>
				<p>{budget}</p>

				<Link to={`/offer-details/${_id}`}>See offer</Link>

				<hr />
			</article>
		</div>
	)
}

export default OfferCard
