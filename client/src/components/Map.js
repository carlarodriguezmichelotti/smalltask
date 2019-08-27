import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import GoogleMapReact from 'google-maps-react'
import Autocomplete from 'react-google-autocomplete'

class MapContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			stores: [
				{ lat: 40.3922718, lng: -3.6985561999999996 }
				// { lat: 47.359423, lng: -122.021071 },
				// { lat: 47.2052192687988, lng: -121.988426208496 },
				// { lat: 47.6307081, lng: -122.1434325 },
				// { lat: 47.3084488, lng: -122.2140121 },
				// { lat: 47.5524695, lng: -122.0425407 }
			]
		}
	}

	componentDidMount = () => {
		//findAll y markers.
		// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

		// Enable or disable logs. Its optional.

		navigator.geolocation.getCurrentPosition(position => {
			this.setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude } })
		})
	}

	displayMarkers = tasks => {
		return tasks.map((task, index) => {
			console.log(task)
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: task.place.latitude,
						lng: task.place.longitude
					}}
					onClick={() => console.log('You clicked me!')}
				/>
			)
		})
	}

	render() {
		return this.state.center ? (
			<>
				<Autocomplete
					style={{ width: '90%' }}
					onPlaceSelected={place => {
						console.log(parseFloat(place.geometry.location.lat()))
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
				<GoogleMapReact google={this.props.google} zoom={8} style={mapStyles} initialCenter={this.state.center}>
					{this.displayMarkers(this.props.tasks)}
				</GoogleMapReact>
			</>
		) : (
			<p>Waiting for location...</p>
		)
	}
}

const mapStyles = {
	width: '50%',
	height: '100%'
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(MapContainer)
