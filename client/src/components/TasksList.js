import React, { Component } from 'react'
import Services from '../services/task.services'

import TaskForm from './TaskForm'
import TaskCard from './TaskCard'

import { Modal, Toast } from 'react-bootstrap'

class TasksList extends Component {

    constructor() {
        super()
        this.state = { tasks: []}// showModal: false, showToast: false }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getTasks()
            .then(response => this.setState({ tasks: response.data }))
            .catch(err => console.log(err))
    }

    updateMyList = () => {
        this.services.getMyTasks()
            .then(response => this.setState({tasks: response.data}))
            .catch(err => console.log(err))
    }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })
    handleToastOpen = () => this.setState({ showToast: true })
    handleToastClose = () => this.setState({ showToast: false })


    render() {

       
        return (
            <>
                <div className="container">

                    <h1>Listado de tasks</h1>
                    
                    {this.props.userInSession}

                    <div className="row task-list">
                    
                        {this.state.tasks.map(task => <TaskCard key={task._id} {...task} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default TasksList