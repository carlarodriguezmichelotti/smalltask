import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import AuthServices from './services/auth.services'
import Signup from './components/auth/SignUp'
import Login from './components/auth/Login'
import NavBar from './components/NavBar'
import TasksList from './components/Tasks/TasksList'
import MyTaskList from './components/Profile/MyTaskList'
import MyOpenTasksList from './components/Profile/MyOpenTasksList'
import MyAssignedTasksList from './components/Profile/MyAssignedTasksList'
import AssignedTaskerList from './components/Tasks/AssignedTaskerList'
import CompletedTask from './components/Tasks/CompletedTask'
import TaskDetail from './components/Tasks/TaskDetail'
import TaskAssignedList from './components/Tasks/TaskAsignedList'
import TaskForm from './components/Tasks/TaskForm'
import Profile from './components/Profile/Profile'
import Home from './components/Home'
import OffersList from './components/Offers/OffersList'
import OfferDetails from './components/Offers/OfferDetails'
import style from 'bootstrap/dist/css/bootstrap.css'
import LoggedInNavBar from './components/LoggedInNavBar'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null }
		this.authServices = new AuthServices()
	}

	setTheUser = user => {
		this.setState({ loggedInUser: user })
		console.log('Un componente ha cambiado el usuario en App:', this.state.loggedInUser)
	}

	fetchUser = () => {
		if (this.state.loggedInUser === null) {
			this.authServices
				.loggedin()
				.then(response => this.setState({ loggedInUser: response }))
				.catch(x => this.setState({ loggedInUser: false }))
		}
	}

	updateTaskList = () => {
		this.services
			.getTasks()
			.then(response => this.setState({ tasks: response.data }))
			.catch(err => console.log(err))
	}

	updateOfferList = () => {
		this.services
			.getOffers()
			.then(response => this.setState({ tasks: response.data }))
			.catch(err => console.log(err))
	}

	render() {
		this.fetchUser()

		if (!this.state.loggedInUser) {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
					<Switch>
						<Route path='/' exact render={match => <Home {...match} userInSession={this.state.loggedInUser} />} />
						<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
						<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					</Switch>
				</>
			)
		} else {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
					<LoggedInNavBar />

					<Switch>
						<Route path='/' exact render={match => <Home {...match} userInSession={this.state.loggedInUser} />} />
						<Route path='/profile' exact render={match => <Profile {...match} userInSession={this.state.loggedInUser} />} />
						<Route path='/my-tasks' exact render={() => <MyTaskList user={this.state.loggedInUser} />} />
						<Route path='/my-open-tasks' exact component={MyOpenTasksList} />
						<Route path='/my-assigned-tasks' exact component={MyAssignedTasksList} />

						<Route
							path='/assigned-tasker'
							exact
							render={match => <AssignedTaskerList {...match} userInSession={this.state.loggedInUser} />}
						/>
						<Route path='/task/:id' exact render={match => <TaskDetail {...match} userInSession={this.state.loggedInUser} />} />
						<Route path='/how-it-works' />
						<Route path='/tasks' exact component={TasksList} />
						<Route
							path='/postTask'
							exact
							render={match => <TaskForm {...match} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />}
						/>
						<Route path='/task-offers' exact component={OffersList} />
						<Route path='/offer-details/:id' exact component={OfferDetails} />
						<Route path='/accept-offer/:taskid/:bidderid' exact component={OffersList} />
						<Route path='/assigned-tasks' exact render={match => <TaskAssignedList {...match}></TaskAssignedList>} />
						<Route path='/completed-tasks' exact render={match => <CompletedTask {...match}></CompletedTask>} />
						<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
						<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					</Switch>
				</>
			)
		}
	}
}

export default App
