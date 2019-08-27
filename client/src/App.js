import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import AuthServices from './services/auth.services'
import Signup from './components/auth/SignUp'
import Login from './components/auth/Login'
import NavBar from './components/NavBar'

import TasksList from './components/TasksList'
import MyTaskList from './components/MyTaskList'
import TaskDetail from './components/TaskDetail'
import TaskForm from './components/TaskForm'
import Profile from './components/Profile'
import Home from './components/Home'
import OffersList from './components/OffersList'
import OfferDetails from './components/OfferDetails'
import style from 'bootstrap/dist/css/bootstrap.css'
// import MapPrueba from './components/MapPrueba'

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

		// this.state.loggedInUser && console.log(this.state.loggedInUser.data)

		if (!this.state.loggedInUser) {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
						<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					</Switch>
				</>
			)
		} else {
			return (
				<>
					<NavBar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
					<div style={{ display: 'flex', width: '100vw' }}>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/profile' exact render={match => <Profile {...match} userInSession={this.state.loggedInUser} />} />
							<Route path='/my-tasks' exact component={MyTaskList} />
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

							{/* <Route
								path='/postOffer/'
								exact
								render={match => <OfferForm {...match} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />}
							/> */}
							<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
							<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
						</Switch>
					</div>
				</>
			)
		}
	}
}

export default App
