import React, { Component } from 'react'
import Services from '../services/task.services'
import TaskCard from './TaskCard'
import GoogleApiWrapper from './Map'

class TasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getTasks()
			.then(response => this.setState({ tasks: response.data }))
			.catch(err => console.log(err))
	}

	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })
	handleToastOpen = () => this.setState({ showToast: true })
	handleToastClose = () => this.setState({ showToast: false })

	render() {
		return (
			<>
				<h1>Listado de tasks</h1>

				{this.props.userInSession}

				{this.state.tasks.map(task => (
					<TaskCard key={task._id} {...task} />
				))}

				{/* <div className='row task-list'>
						{this.state.tasks.map(task => (
							<TaskCard key={task._id} {...task} />
						))}
					</div> */}
				<GoogleApiWrapper tasks={this.state.tasks} />
			</>
		)
	}
}

export default TasksList
