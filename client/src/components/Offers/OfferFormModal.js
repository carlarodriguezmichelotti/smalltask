import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import OfferForm from './OfferForm'

// handleFormSubmit = e => {
// 	e.preventDefault()
// 	this.service
// 		.postCoaster(this.state)
// 		.then(x => {
// 			this.props.closeModal()
// 			this.props.updateCoasterList()
// 		})
// 		.catch(err => console.log('error', err))
// }

class OfferFormModal extends Component {
	render() {
		return (
			<Modal {...this.props} size='small' aria-labelledby='example-modal-sizes-title-sm'>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-sm' className='allFontFamily'>
						Make an offer
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<OfferForm
						setUser={this.props.setUser}
						userInSession={this.props.userInSession}
						taskowner={this.props.taskowner}
						taskid={this.props.taskid}
					/>
				</Modal.Body>
			</Modal>
		)
	}
}
export default OfferFormModal
