import React, { Component } from 'react'
import Services from '../services/task.services'

class TaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			creator: '',
			title: '',
			description: '',
			budget: '',
			date: ''
		}
		this.service = new Services()
	}

	handleChangeInput = e => {this.setState({ [e.target.name]: e.target.value,
	creator: this.props.userInSession.data._id})
		console.log(this.props.userInSession)
}
	

	handleFormSubmit = e => {
		e.preventDefault()
		this.service
			.postTask(this.state)
			.then(x => {
				this.props.closeModal()
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
					{/*
									<div className='form-group'>
						<label htmlFor='input-img'>Where do you need it done?</label>
						<input name='date' type='place' className='form-control' id='input-img' onChange={this.handleChangeInput} />
					</div>*/}
	
					<button type='submit' className='btn btn-dark btn-sm'>
						Crear
					</button>
					<button className='btn btn-dark btn-sm' onClick={this.props.closeModal}>
						Cerrar
					</button>
				</form>
			</>
		)
	}
}

export default TaskForm
