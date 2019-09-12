import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const TaskInfoWindow = props => {
	return (
		<Container>
			<Card style={{ width: '25rem', height: '15rem', borderRadius: 3 }} className='taskCardStyle'>
				<Card.Body>
					<Row>
						<Col sm={7}>
							<Card.Title className='taskCardInfo'>{props.title}</Card.Title>
						</Col>
						<Col sm={5}>
							<Card.Text className='taskCardInfo' style={{ fontSize: '23px' }}>
								<b>{props.budget}€</b>
							</Card.Text>
						</Col>
					</Row>
					<br></br>
					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../../assets/images/location-pin.svg')}></Image>
						</Col>
						<Col sm={11}>
							<Card.Text className='taskCardInfo'> {props.place.address}</Card.Text>
						</Col>
					</Row>
					<br></br>
					<Row>
						<Col sm={1}>
							<Image className='cardImage' src={require('../../assets/images/calendar.svg')}></Image>
						</Col>
						<Col sm={11}>
							<Card.Text className='taskCardInfo'>{props.date.slice(0, 10)}</Card.Text>
						</Col>
					</Row>
					<br></br>
					<Row>
						<Col sm={1}>
							<Image src={props.creatorimage} style={{ width: '25px', height: '25px' }} className='imgCard' />
						</Col>
						<Col sm={11}>
							<Card.Text className='taskCardInfo'>Posted by: {props.creatorname}</Card.Text>
						</Col>
					</Row>
				</Card.Body>
				<Card.Footer className='taskCardInfo'>{props.status}</Card.Footer>
			</Card>
		</Container>
	)
}

export default TaskInfoWindow
