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
							<Col>
								<Image src={require('../safe.svg')} style={{ width: '25px', height: '25px' }} />
							</Col>
							<Col>
								<Card.Text className='taskCardInfo'>Funds Secured</Card.Text>
							</Col>
							<Col>
								<Card.Text className=' text-center taskCardInfo'>{budget}</Card.Text>
							</Col>
						</Row>
						<Row>
							<Card.Text>Posted by: {creator.username}</Card.Text>
							<Image src={creator.imgUrl} className='imgCard' style={{ width: '60px', height: '60px' }}></Image>
						</Row>
					</Card.Body>
					{/* <Card.Footer>{this.props.status}</Card.Footer> */}
				</Card>
			</Container>
		</>
	)
}

export default AssignedTaskerCard
