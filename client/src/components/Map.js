import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import GoogleMapReact from 'google-maps-react'
import Geocode from 'react-geocode';


class MapContainer extends Component {

	constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]

    }
  
  }

  
 displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  // // componentDidMount() {
  //   {console.log(Geocode)
  //   Geocode.fromAddress("Madrid")
  //     .then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       console.log(lat, lng);
  //       this.setState({
  //         center: {lat, lng}
  //       })
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }}
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

	render() {
		return (
      <>
      <GoogleMapReact 
        google={this.props.google} 
        zoom={8} style={mapStyles} 
        initialCenter={ this.state.center}>
			  {this.displayMarkers()}
			</GoogleMapReact>
      </>
		)
  }
}



const mapStyles = {
	width: '100%',
	height: '100%'
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(MapContainer)
