import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/task.services'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import OffersListModal from './OffersListModal'

const AssignedTaskerCard = ({ budget, title, creator }) => {
	return (
		<>
			<Container>
				<Card border='success' style={{ width: '23rem', borderRadius: 3 }} className='taskCardStyle'>
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Row>
							<Col sm={{ span: 2, offset: 4 }}>
								<Image className='imagecandado' src={require('../safe.svg')} style={{ width: '20px', height: '20px' }} />
							</Col>
						</Row>
						<Row>
							<Col>
								<Card.Text className='taskCardInfo fuentecandado'>Funds Secured</Card.Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card.Text className=' fuentefondos text-center taskCardInfo'>{budget}€</Card.Text>
							</Col>
						</Row>
						<Row>
							<Col sm={10}>
								<Card.Text className='postedByCompleted'>Posted by: {creator.username}</Card.Text>
							</Col>
							<Col sm={2}>
								<Image src={creator.imgUrl} className='imgCard' style={{ width: '25px', height: '25px' }}></Image>
							</Col>
						</Row>
						<br></br>
						<Button variant='dark' size='sm' block>
							Send a message to task poster
						</Button>
					</Card.Body>
				</Card>
			</Container>
		</>
	)
}

export default AssignedTaskerCard
