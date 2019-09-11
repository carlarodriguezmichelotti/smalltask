import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<NavDropdown className='navstyle' title='AS POSTER' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/my-tasks'>ALL TASKS</NavDropdown.Item>
							<NavDropdown.Item href='/my-open-tasks'>POSTED TASKS</NavDropdown.Item>
							<NavDropdown.Item href='/my-assigned-tasks'>ASSIGNED TASKS</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown className='navstyle' title='AS TASKER' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/assigned-tasker'>OFFERS PENDING</NavDropdown.Item>
							<NavDropdown.Item href='/my-open-tasks'>TASKS COMPLETED</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar>
			</>
		)
	}
}
export default LoggedInNavBar
