import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'
import Signup from './components/auth/SignUp'
import Login from './components/auth/Login'
import NavBar from './components/NavBar'
import GoogleApiWrapper from './components/Map'
import TaskCard from './components/TaskCard'
import TasksList from './components/TasksList'
import MyTaskList from './components/MyTaskList'
// import MapPrueba from './components/MapPrueba'
import TaskForm from './components/TaskForm'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null }
		this.authServices = new AuthServices()
	}


	setTheUser = user => {
		this.setState({ loggedInUser: user })
		console.log(this.state.loggedInUser)
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

	render() {
		this.fetchUser()
	
		if (!this.state.loggedInUser) {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

					<Switch>
					
						<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
						<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					</Switch>

				</>
			)
		} else {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

					<Switch>
						<Route path='/my-tasks' exact component={MyTaskList} />
						<Route path='/how-it-works' />
						<Route path='/tasks' exact component={TasksList} />
						<Route path='/postTask' exact render={match => <TaskForm {...match} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
						<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
						<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					</Switch>
					 <GoogleApiWrapper /> 
				</>
			)
		}
	}
}

export default App
