import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Services from '../services/task.services'

class OfferForm extends Component {
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

	handleChangeInput = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		this.service
			.postOffer(this.state)
			.then(x => {
				this.props.updateOfferList()
			})
			.catch(err => console.log('error', err))
	}

	redirectToTarget = () => {
		return <Redirect to={{ pathname: '/' }} />
	}

	render() {
		return (
			<>
				{/* <h4>Make an offer</h4> */}

				<hr />

				<form onSubmit={this.handleFormSubmit}>
					<div className='form-group'>
						<label htmlFor='input-nombre' className='allFontFamily'>
							Your offer:
						</label>
						<input
							name='budget'
							type='number'
							className='form-control allFontFamily'
							id='input-budget'
							onChange={this.handleChangeInput}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='input-description' className='allFontFamily'>
							Your message:
						</label>
						<input
							name='description'
							type='text'
							className='form-control allFontFamily'
							id='input-descripcion'
							onChange={this.handleChangeInput}
						/>
					</div>

					<button type='submit' className='btn btn-dark btn-sm allFontFamily' onClick={() => this.redirectToTarget()}>
						Make your offer
					</button>
				</form>
			</>
		)
	}
}

export default OfferForm
