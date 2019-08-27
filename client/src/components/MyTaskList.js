import React, { Component } from 'react'
import Services from '../services/task.services'
import MyTaskCard from './MyTaskCard'
import { Link } from 'react-router-dom'

class TasksList extends Component {
	constructor() {
		super()
		this.state = { tasks: [] } // showModal: false, showToast: false }
		this.services = new Services()
	}

	componentDidMount = () => this.updateMyList()

	updateMyList = () => {
		this.services
			.getMyTasks()
			.then(response => this.setState({ tasks: response.data }))
			.catch(err => console.log(err))
	}

	handleModalOpen = () => this.setState({ showModal: true })
	handleModalClose = () => this.setState({ showModal: false })
	handleToastOpen = () => this.setState({ showToast: true })
	handleToastClose = () => this.setState({ showToast: false })

	render() {
		if (this.state.tasks.length === 0) {
			return (
				<>
					<h3>Looks like you haven’t posted a task. How about posting one now?</h3>
					<Link to='/postTask'>Post a task</Link>
				</>
			)
		} else {
			return (
				<>
					{/* <div className='container'> */}
					<h1>My tasks</h1>
					{/* 
						<div className='row task-list'> */}
					{this.state.tasks.map(task => (
						<MyTaskCard key={task._id} {...task} />
					))}
					{/* </div> */}
					{/* </div> */}
				</>
			)
		}
	}
}

export default TasksList
