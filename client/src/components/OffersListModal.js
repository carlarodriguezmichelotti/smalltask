import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import OffersList from './OffersList'
class OffersListModal extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Modal {...this.props} size='small' aria-labelledby='example-modal-sizes-title-sm'>
				<Modal.Header closeButton>
					<Modal.Title className='allFontFamily' id='example-modal-sizes-title-sm'>
						Taskers offers
					</Modal.Title>
					:￼
				</Modal.Header>
				<Modal.Body>
					<OffersList userInSession={this.props.user} taskId={this.props.taskid} />
				</Modal.Body>
			</Modal>
		)
	}
}
export default OffersListModal
