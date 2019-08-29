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

	// toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

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
					{/* <div className='toggle-menu' onClick={this.toggleMenu}>
						&equiv;{' '}
					</div> */}
					{/* <header className='menu'> */}
					{
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
									<Nav.Link className='nav-item' onClick={this.logout}>
										Logout
									</Nav.Link>

									<Navbar.Text className='nav-item-text'> {saludo}</Navbar.Text>
								</Nav>
							</Navbar>
						</>
					}

					{/* </header> */}
				</>
			)
		} else {
			return (
				<>
					{/* <div className='toggle-menu' onClick={this.toggleMenu}>
						&equiv;{' '}
					</div> */}
					{/* <header className='menu'> */}
					{/* <Nav>
							<Nav.Item>
								<Nav.Link href='/'>Inicio</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/signup'>Registro</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/login'>Inicio de sesión</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/tasks'>Browse tasks</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='/how-it-works'>How it works</Nav.Link>
							</Nav.Item>
							<Nav.Item>Bienvenid@, {saludo}</Nav.Item>
						</Nav> */}

					<>
						<Navbar bg='transparent'>
							<Navbar.Brand href='/'>SmallTask</Navbar.Brand>
							<Nav className='navbarcolor'>
								<Nav.Link href='/'>Inicio</Nav.Link>
								<Nav.Link href='/signup'>Registro</Nav.Link>
								<Nav.Link href='/login'>Inicio de sesión</Nav.Link>
								<Nav.Link href='/tasks'>Browse tasks</Nav.Link>
								<Nav.Link href='/how-it-works'>How it works</Nav.Link>
								<Navbar.Text>Bienvenid@: {saludo}</Navbar.Text>
							</Nav>
						</Navbar>
					</>
					<h1>SmallTask App</h1>
					{/* </header> */}
				</>
			)
		}
	}
}
export default NavBar
