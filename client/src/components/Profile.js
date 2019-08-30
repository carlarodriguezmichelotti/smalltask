import React, { Component } from 'react'
import AuthServices from '../services/auth.services'
import LoggedInNavBar from './LoggedInNavBar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.services = new AuthServices()
	}
	render() {
		return (
			<>
				<Container>
					<Row>
						<img className='imgStyle profilePicStyle' src={this.props.userInSession.data.imgUrl} />
					</Row>
					<br></br>
					<Row>
						<p className='profileData profileDataStyle'>Username: {this.props.userInSession.data.username}</p>
					</Row>
					<Row>
						<p className='profileData profileDataStyle'>Member since: {this.props.userInSession.data.created_at.slice(0, 10)}</p>
					</Row>
					<Row>
						<article className='task-card'>
							<hr />
						</article>
					</Row>
				</Container>
			</>
		)
	}
}

export default Profile
