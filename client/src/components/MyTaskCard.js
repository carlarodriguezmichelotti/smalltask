import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MyTaskCard = ({ title, description, budget, _id, date, status }) => {
	// return (
	// 	<div className='col-md-3'>
	// 		<article className='task-card'>
	// 			<h4>{title}</h4>
	// 			<p>{description}</p>
	// 			<p>{budget}</p>

	// 			<Link to={`/task-offers`}>
	// 				<Button variant='dark' size='sm' block>
	// 					See Offers
	// 				</Button>
	// 			</Link>
	// 			<hr />
	// 		</article>
	// 	</div>
	// )

	if (status === 'OPEN') {
		return (
			<>
				<Card border='success' style={{ width: '21rem', borderRadius: 3 }} className='taskCardStyle'>
					<Card.Body>
						<Card.Title>
							<b>{title}</b>
						</Card.Title>
						<Card.Text className='taskCardInfo'>{description}</Card.Text>
						<Card.Text className='taskCardInfo'>{date.slice(0, 10)}</Card.Text>
						<Card.Text className='taskCardInfo'>{budget}</Card.Text>
						<Link to={`/task-offers`}>
							<Button variant='dark' size='sm' block>
								See Offers
							</Button>
						</Link>
					</Card.Body>
					<Card.Footer>{status}</Card.Footer>
				</Card>
				<br></br>
			</>
			// 		<Row>
			// 			<Link to={`/task/${_id}`}>
			// 				<Button variant='dark' size='sm' block>
			// 					Details
			// 				</Button>
			// 			</Link>
			// 		</Row>
			// 	</Container>
		)
	} else {
		return (
			<>
				<Card border='dark' style={{ width: '21rem' }}>
					<Card.Body>
						<Card.Title>{title}</Card.Title>

						<Link to={`/task-offers`}>
							<Button variant='dark' size='sm' block>
								See Offers
							</Button>
						</Link>
					</Card.Body>
					<Card.Footer>{status}</Card.Footer>
				</Card>
				<br></br>
			</>
		)
	}
}

export default MyTaskCard
