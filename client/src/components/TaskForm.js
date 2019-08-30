import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Autocomplete from 'react-google-autocomplete'
import Services from '../services/task.services'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class TaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			creator: '',
			title: '',
			description: '',
			budget: '',
			date: '',
			status: 'OPEN',
			lat: '',
			lng: ''
		}
		this.service = new Services()
	}

	handleChangeInput = e => {
		this.setState({ [e.target.name]: e.target.value, creator: this.props.userInSession.data._id })
		console.log(this.props.userInSession)
	}

	redirectToMyTasks = () => {
		const { history } = this.props
		if (history) history.push('/my-tasks')
	}

	handleFormSubmit = e => {
		e.preventDefault()
		this.service
			.postTask(this.state)
			.then(x => {
				this.redirectToMyTasks()
				this.props.updateTaskList()
			})
			.catch(err => console.log('error', err))
	}

	render() {
		return (
			<>
				<h4 className='formTitleStyle'>What do you need done?</h4>

				<hr style={{ width: '100%' }} />
				<Link to='/my-tasks'>
					<Image src={require('../left-arrow.svg')} style={{ width: 30 }} className='backArrow'></Image>
				</Link>
				<form onSubmit={this.handleFormSubmit} id='newTaskForm' className='taskCardStyle loginForm'>
					<div className='form-group'>
						<label htmlFor='input-nombre'>Title of your task</label>
						<br />
						<input name='title' type='text' className='newTaskInputs' id='input-nombre' onChange={this.handleChangeInput} />
					</div>
					<div className='form-group'>
						<label htmlFor='input-description'>Details</label>
						<br />
						<input
							name='description'
							type='text'
							className='newTaskInputs'
							id='input-descripcion'
							onChange={this.handleChangeInput}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='input-budget'>What is your budget?</label>
						<br />
						<input name='budget' type='number' className='newTaskInputs' id='input-budget' onChange={this.handleChangeInput} />
					</div>
					<div className='form-group'>
						<label htmlFor='input-inv'>When do you need it done?</label>
						<br />
						<input name='date' type='date' className='newTaskInputs' id='input-date' onChange={this.handleChangeInput} />
					</div>

					<div className='form-group'>
						<label htmlFor='input-img'>Where do you need it done?</label>
						<br></br>
						<Autocomplete
							style={{ width: '350px', border: 0, borderbottom: 'solid' }}
							onPlaceSelected={place => {
								this.setState({
									place: {
										latitude: parseFloat(place.geometry.location.lat()),
										longitude: parseFloat(place.geometry.location.lng()),
										address: place.formatted_address
									}
								})
							}}
							types={['address']}
							componentRestrictions={{ country: 'es' }}
						/>
					</div>
					<br></br>
					{/* btn btn-dark btn-sm */}
					<button type='submit' id='botonTaskForm' className='btn'>
						Post a task
					</button>

					{/* <button className='btn btn-dark btn-sm' onClick={this.redirectToMyTasks}>
						Cerrar
					</button> */}
				</form>
			</>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(TaskForm)
