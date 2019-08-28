import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

const TaskCard = ({ title, description, status, budget, _id, place, date }) => {
	if (status === 'OPEN') {
		return (
			<>
				<Card border='success' style={{ width: '21rem', borderRadius: 3 }} className='taskCardStyle'>
					<Card.Body>
						<Card.Title>
							<b>{title}</b>
						</Card.Title>
						<Card.Text className='taskCardInfo'>{place.address}</Card.Text>
						<Card.Text className='taskCardInfo'>{date.slice(0, 10)}</Card.Text>
						<Link to={`/task/${_id}`}>
							<Button variant='dark' size='sm' block>
								Details
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
						<Card.Text>{place.address}</Card.Text>
						<Link to={`/task/${_id}`}>
							//{' '}
							<Button variant='dark' size='sm' block>
								// Details //{' '}
							</Button>
							//{' '}
						</Link>
					</Card.Body>
					<Card.Footer>{status}</Card.Footer>
				</Card>
				<br></br>
			</>
		)
	}
}

export default TaskCard
