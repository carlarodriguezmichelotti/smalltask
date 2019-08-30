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
				<h3>
					<Row-justify-content-center>
						<img className='imgStyle' src={this.props.userInSession.data.imgUrl} />
						<p className='profileData'>Username: {this.props.userInSession.data.username}</p>
						<p className='profileData'>Member since: {this.props.userInSession.data.created_at.slice(0, 10)}</p>

						<article className='task-card'>
							<hr />
						</article>
					</Row-justify-content-center>
				</h3>
			</>
		)
	}
}

export default Profile
