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
					style={{ width: '500px' }}
					onPlaceSelected={place => {
						console.log(parseFloat(place.geometry.location.lat()))
						console.log(place.formatted_address)
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
	width: '500px',
	height: '500px',
	styles: [
		{
			featureType: 'all',
			elementType: 'labels.text',
			stylers: [
				{
					color: '#000000'
				},
				{
					visibility: 'simplified'
				}
			]
		},
		{
			featureType: 'all',
			elementType: 'labels.text.fill',
			stylers: [
				{
					hue: '#ff0000'
				}
			]
		},
		{
			featureType: 'all',
			elementType: 'labels.text.stroke',
			stylers: [
				{
					color: '#ff0000'
				},
				{
					visibility: 'simplified'
				}
			]
		},
		{
			featureType: 'administrative',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#000000'
				},
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'administrative.country',
			elementType: 'geometry.fill',
			stylers: [
				{
					visibility: 'off'
				},
				{
					color: '#ff0000'
				}
			]
		},
		{
			featureType: 'administrative.country',
			elementType: 'geometry.stroke',
			stylers: [
				{
					visibility: 'on'
				}
			]
		},
		{
			featureType: 'administrative.country',
			elementType: 'labels',
			stylers: [
				{
					visibility: 'simplified'
				},
				{
					color: '#9b30f2'
				}
			]
		},
		{
			featureType: 'administrative.province',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'administrative.locality',
			elementType: 'all',
			stylers: [
				{
					visibility: 'simplified'
				},
				{
					color: '#7620bd'
				}
			]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'geometry',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'geometry.fill',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'geometry.stroke',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'labels',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'geometry',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'geometry.fill',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'landscape.natural.landcover',
			elementType: 'all',
			stylers: [
				{
					visibility: 'on'
				}
			]
		},
		{
			featureType: 'landscape.natural.terrain',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'poi',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [
				{
					saturation: -100
				},
				{
					lightness: 45
				},
				{
					visibility: 'simplified'
				}
			]
		},
		{
			featureType: 'road.highway',
			elementType: 'all',
			stylers: [
				{
					visibility: 'simplified'
				},
				{
					color: '#c4c6f4'
				}
			]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{
					visibility: 'off'
				},
				{
					color: '#d3d4f3'
				}
			]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text',
			stylers: [
				{
					visibility: 'simplified'
				},
				{
					color: '#000000'
				},
				{
					weight: '0.01'
				}
			]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [
				{
					visibility: 'simplified'
				},
				{
					weight: '0.01'
				}
			]
		},
		{
			featureType: 'transit.station.bus',
			elementType: 'all',
			stylers: [
				{
					visibility: 'off'
				}
			]
		},
		{
			featureType: 'water',
			elementType: 'all',
			stylers: [
				{
					color: '#eeeeff'
				},
				{
					visibility: 'on'
				}
			]
		}
	]
}

export default GoogleApiWrapper({
	apiKey: `${process.env.REACT_APP_APPKEY}`
	//'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(MapContainer)
