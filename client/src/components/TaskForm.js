import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Autocomplete from 'react-google-autocomplete'
import Services from '../services/task.services'

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
				<h4>What do you need done?</h4>

				<hr />

				<form onSubmit={this.handleFormSubmit}>
					<div className='form-group'>
						<label htmlFor='input-nombre'>Title of your task</label>
						<input name='title' type='text' className='form-control' id='input-nombre' onChange={this.handleChangeInput} />
					</div>
					<div className='form-group'>
						<label htmlFor='input-description'>Details</label>
						<input
							name='description'
							type='text'
							className='form-control'
							id='input-descripcion'
							onChange={this.handleChangeInput}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='input-budget'>What is your budget?</label>
						<input name='budget' type='number' className='form-control' id='input-budget' onChange={this.handleChangeInput} />
					</div>
					<div className='form-group'>
						<label htmlFor='input-inv'>When do you need it done?</label>
						<input name='date' type='date' className='form-control' id='input-date' onChange={this.handleChangeInput} />
					</div>

					<div className='form-group'>
						<label htmlFor='input-img'>Where do you need it done?</label>

						<Autocomplete
							style={{ width: '90%' }}
							onPlaceSelected={place => {
								this.setState({
									place: {
										latitude: parseFloat(place.geometry.location.lat()),
										longitude: parseFloat(place.geometry.location.lng())
									}
								})
							}}
							types={['address']}
							componentRestrictions={{ country: 'es' }}
						/>
					</div>

					<button type='submit' className='btn btn-dark btn-sm'>
						Crear
					</button>

					<button className='btn btn-dark btn-sm' onClick={this.redirectToMyTasks}>
						Cerrar
					</button>
				</form>
			</>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(TaskForm)
