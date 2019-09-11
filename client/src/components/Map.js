import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import GoogleMapReact from 'google-maps-react'
import Autocomplete from 'react-google-autocomplete'
import TaskInfoWindow from './map/TaskCardInfoWindow'

class MapContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: this.props.tasks,
			showIW: Array(this.props.tasks.length).fill(false)
		}
	}

	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude } })
		})
	}

	displayMarkers = tasks => {
		return tasks.map((task, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: task.place.latitude,
						lng: task.place.longitude
					}}
					onClick={() => {
						const copy = this.state.showIW
						copy[index] = !copy[index]
						this.setState({
							...this.state,
							copy
						})
					}}
				/>
			)
		})
	}

	displayInfoWindows = tasks => {
		return tasks.map((task, index) => {
			return (
				<InfoWindow
					visible={this.state.showIW[index]}
					onClose={() => {
						const copy = this.state.showIW
						copy[index] = !copy[index]
						this.setState({
							...this.state,
							copy
						})
					}}
					position={{
						lat: task.place.latitude,
						lng: task.place.longitude
					}}
					key={index}
					id={index}
				>
					<TaskInfoWindow creatorname={task.creator.username} creatorimage={task.creator.imgUrl} key={task._id} {...task} />{' '}
				</InfoWindow>
			)
		})
	}

	render() {
		return this.state.center ? (
			<>
				<Autocomplete
					style={{ width: '500px' }}
					onPlaceSelected={place => {
						this.setState({
							currentSearch: {
								lat: parseFloat(place.geometry.location.lat()),
								lng: parseFloat(place.geometry.location.lng())
							}
						})
					}}
					types={['address']}
					componentRestrictions={{ country: 'es' }}
				/>
				<GoogleMapReact google={this.props.google} zoom={10} style={mapStyles} initialCenter={this.state.center}>
					{this.displayMarkers(this.props.tasks)}
					{this.displayInfoWindows(this.props.tasks)}
				</GoogleMapReact>
			</>
		) : (
			<p>Waiting for location...</p>
		)
	}
}

const mapStyles = {
	width: '500px',
	height: '500px'
}

export default GoogleApiWrapper({
	apiKey: `${process.env.REACT_APP_APPKEY}`
})(MapContainer)
