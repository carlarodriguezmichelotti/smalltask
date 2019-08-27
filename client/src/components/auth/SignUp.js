import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			imageUrl: ''
		}
		this.authServices = new AuthServices()
	}

	//Cambia la imagen en el state dinamicamente
	handleFileUpload = e => {
		this.setState({
			...this.state,
			file: e.target.files[0]
		})
	}

	handleInputChange = e => {
		const { name, value, imageUrl } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { username, password, imageUrl } = this.state

		//Subida de imagen
		const uploadData = new FormData()

		uploadData.append('imageUrl', this.state.file)

		this.authServices
			.handleUpload(uploadData)
			.then(response => this.setState({ imageUrl: response.data.secure_url }))
			.then(x => {
				//Una vez subida la imagen enviamos el usuario al back y limpiamos el form y redireccionamos a index.
				this.authServices.signup(username, password, imageUrl).then(theNewUser => {
					this.setState({
						username: '',
						password: '',
						imageUrl: ''
					})
					this.props.setUser(theNewUser)
					this.props.history.push('/')
				})
			})
			.catch(err => console.log(err))
		//console.log(err.response.data.message))
	}

	render() {
		return (
			<div className='container'>
				<h1>Join Us</h1>
				<form onSubmit={this.handleFormSubmit}>
					Username: <input name='username' type='text' value={this.state.username} onChange={this.handleInputChange} /> <br />
					Password: <input name='password' type='password' value={this.state.password} onChange={this.handleInputChange} /> <br />
					Image: <input name='imageUrl' type='file' onChange={this.handleFileUpload} />
					<br />
					<input type='submit' value='Join SmallTask' />
				</form>
			</div>
		)
	}
}

export default Signup
