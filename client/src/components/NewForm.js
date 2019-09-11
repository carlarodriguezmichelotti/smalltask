import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Services from '../services/task.services'

class NewForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskid: this.props.taskid,
			taskowner: this.props.taskowner,
			bidderid: this.props.userInSession.data._id,
			bidderusername: this.props.userInSession.data.username,
			description: '',
			budget: ''
		}
		this.service = new Services()
	}

	handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

	handleFormSubmit = e => {
		e.preventDefault()
		this.service
			.postOffer(this.state)
			.then(x => {
				this.props.closeModal()
				this.props.updateOfferList()
			})
			.catch(err => console.log('error', err))
	}

	render() {
		return (
			<>
				<button className='backButton' onClick={this.props.closeModal}>
					<Image src={require('../left-arrow.svg')}></Image>
				</button>

				<h4 className='allFontFamily modalTitle'>Make an offer</h4>

				<hr></hr>

				<form onSubmit={this.handleFormSubmit}>
					<div className='form-group modalInput'>
						<label htmlFor='input-nombre' className='allFontFamily'>
							Your offer
						</label>
						<input
							name='budget'
							type='number'
							className='form-control allFontFamily'
							id='input-budget'
							onChange={this.handleChangeInput}
						/>
					</div>
					<div className='form-group modalInput'>
						<label htmlFor='input-descripcion' className='allFontFamily'>
							Your message
						</label>
						<input
							name='description'
							type='text'
							className='form-control allFontFamily'
							id='input-descripcion'
							onChange={this.handleChangeInput}
						/>
					</div>

					<div className='buttonsFormat'>
						<button type='submit' className='anotherMargin btn-4 btn-4a allFontFamily'>
							Make your offer
						</button>
					</div>
				</form>
			</>
		)
	}
}

export default NewForm
