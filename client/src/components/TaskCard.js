import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const TaskCard = ({ title, status, budget, _id, place, date, creatorname, creatorimage }) => {
	if (status === 'OPEN') {
		return (
			<>
				<Link to={`/task/${_id}`} style={{ textDecoration: 'none' }}>
					<Container>
						<Card border='success' style={{ width: '23rem', height: '19rem', borderRadius: 3 }} className='taskCardStyle'>
							<Card.Body>
								<Row>
									<Col sm={9}>
										<Card.Title className='taskCardInfo'>{title}</Card.Title>
									</Col>
									<Col sm={3}>
										<Card.Text className='taskCardInfo' style={{ fontSize: '23px' }}>
											<b>{budget}€</b>
										</Card.Text>
									</Col>
								</Row>
								<br></br>
								<Row>
									<Col sm={2}>
										<Image className='cardImage' src={require('../location-pin.svg')}></Image>
									</Col>
									<Col sm={10}>
										<Card.Text className='taskCardInfo'> {place.address}</Card.Text>
									</Col>
								</Row>
								<br></br>
								<Row>
									<Col sm={2}>
										<Image className='cardImage' src={require('../calendar.svg')}></Image>
									</Col>
									<Col sm={10}>
										<Card.Text className='taskCardInfo'>{date.slice(0, 10)}</Card.Text>
									</Col>
								</Row>
								<br></br>
								<Row>
									<Col sm={2}>
										<Image src={creatorimage} style={{ width: '25px', height: '25px' }} className='imgCard' />
									</Col>
									<Col sm={10}>
										<Card.Text className='taskCardInfo'>Posted by: {creatorname}</Card.Text>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer className='taskCardInfo'>{status}</Card.Footer>
						</Card>
					</Container>
					<br></br>
				</Link>
			</>
		)
	} else {
		return (
			<>
				<Container>
					<Card border='dark' style={{ width: '23rem', height: '19rem' }} className='taskCardStyle'>
						<Card.Body>
							<Row>
								<Col sm={9}>
									<Card.Title className='taskCardInfo'>{title}</Card.Title>
								</Col>
								<Col sm={3}>
									<Card.Text style={{ fontSize: '23px' }} className='taskCardInfo'>
										<b>{budget}€</b>
									</Card.Text>
								</Col>
							</Row>
							<br></br>
							<Row>
								<Col sm={2}>
									<Image className='cardImage' src={require('../location-pin.svg')}></Image>
								</Col>
								<Col sm={10}>
									<Card.Text className='taskCardInfo'> {place.address}</Card.Text>
								</Col>
							</Row>

							<br></br>
							<Row>
								<Col sm={2}>
									<Image className='cardImage' src={require('../calendar.svg')}></Image>
								</Col>
								<Col sm={10}>
									<Card.Text className='taskCardInfo'>{date.slice(0, 10)}</Card.Text>
								</Col>
							</Row>
							<br></br>
							<Row>
								<Col sm={2}>
									<Image src={creatorimage} style={{ width: '25px', height: '25px' }} className='imgCard' />
								</Col>
								<Col sm={10}>
									<Card.Text className='taskCardInfo'>Posted by: {creatorname}</Card.Text>
								</Col>
							</Row>
						</Card.Body>
						<Card.Footer className='taskCardInfo'>{status}</Card.Footer>
					</Card>
				</Container>
				<br></br>
			</>
		)
	}
}

export default TaskCard
