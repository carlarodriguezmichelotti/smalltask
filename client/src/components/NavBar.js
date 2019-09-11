import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AuthServices from '../services/auth.services'
import style from 'bootstrap/dist/css/bootstrap.css'

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.authServices = new AuthServices()
	}

	logout = () => {
		this.authServices
			.logout()
			.then(x => {
				this.props.setUser(null)
			})
			.catch(err => console.log(err))
	}

	render() {
		const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'

		if (this.props.userInSession) {
			return (
				<>
					<Navbar className='navstyle' bg='transparent'>
						<Navbar.Brand href='/'>SmallTask</Navbar.Brand>
						<Nav className='justify-content-end' style={{ width: '100%' }}>
							<Nav.Link className='nav-item' href='/profile'>
								Profile
							</Nav.Link>
							<Nav.Link className='nav-item' href='/tasks'>
								Browse tasks
							</Nav.Link>
							<Nav.Link className='nav-item' href='/my-tasks'>
								My tasks
							</Nav.Link>
							<Nav.Link className='nav-item' href='/postTask'>
								New Task
							</Nav.Link>
							<Nav.Link className='nav-item' onClick={this.logout} href='/'>
								Logout
							</Nav.Link>
							<Navbar.Text className='nav-item-text'> {saludo}</Navbar.Text>
						</Nav>
					</Navbar>
				</>
			)
		} else {
			return (
				<>
					<Navbar className='navstyle' bg='transparent'>
						<Navbar.Brand href='/'>SmallTask</Navbar.Brand>
						<Nav className='justify-content-end' style={{ width: '100%' }}>
							<Nav.Link href='/signup'>Sign Up</Nav.Link>
							<Nav.Link href='/login'>Login</Nav.Link>
							{/* <Navbar.Text>Bienvenid@: {saludo}</Navbar.Text> */}
						</Nav>
					</Navbar>
				</>
			)
		}
	}
}
export default NavBar
