import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.services = new AuthServices()
	}
	render() {
		return (
			<>
				<header className='profileHeader'>
					<h1>HOLA VALE</h1>
				</header>
				<div className='col-md-3'>
					<h3>{this.props.userInSession.data.username}</h3>
					<h2>Member since: {this.props.userInSession.data.createdAt}</h2>
					<article className='task-card'>
						<hr />
					</article>
				</div>
			</>
		)
	}
}

export default Profile
