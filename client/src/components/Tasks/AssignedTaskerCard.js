import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const AssignedTaskerCard = ({ budget, title, creator }) => {
	return (
		<>
			<Container>
				<Card border='success' style={{ width: '23rem', borderRadius: 3 }} className='taskCardStyle'>
					<Card.Body>
						<Card.Title>
							<Row>
								<Image
									className='imagecandado'
									src={require('../../assets/images/safe.svg')}
									style={{ width: '20px', height: '20px' }}
								/>

								<Card.Text className='taskCardInfo fuentecandado'>Funds Secured</Card.Text>
							</Row>
						</Card.Title>

						<Row>
							<Col>
								<Card.Text className='fuentefondos text-center taskCardInfo'>{budget}€</Card.Text>
							</Col>
						</Row>
						<br></br>
						<Row>
							<Col style={{ textAlign: 'center' }}>{title}</Col>
						</Row>

						<Row>
							<Col style={{ textAlign: 'center' }}>
								<Image src={creator.imgUrl} className='imgCard' style={{ width: '25px', height: '25px' }}></Image>
							</Col>
						</Row>
						<br></br>
						<Button style={{ width: 250, marginLeft: 40 }} id='botonTaskForm' size='sm' block>
							Send a message to task poster
						</Button>
					</Card.Body>
				</Card>
			</Container>
			<br></br>
		</>
	)
}

export default AssignedTaskerCard
