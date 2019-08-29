import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AuthServices from '../services/auth.services'
import style from 'bootstrap/dist/css/bootstrap.css'

class LoggedInNavBar extends Component {
	constructor(props) {
		super(props)
		this.state = { tasks: [] }
		this.authServices = new AuthServices()
	}

	render() {
		return (
			<>
				<Navbar className='navstyle' bg='transparent'>
					<Nav className='navbarcolor'>
						<Nav.Link href='/my-tasks'>ALL TASKS</Nav.Link>
						<Nav.Link href='/my-open-tasks'>POSTED TASKS</Nav.Link>
						<Nav.Link href='/my-assigned-tasks'>ASSIGNED TASKS</Nav.Link>
					</Nav>
				</Navbar>
			</>
		)
	}
}
export default LoggedInNavBar
