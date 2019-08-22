// import React, { Component } from 'react'
import React from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import GoogleMapReact from 'google-maps-react'
import Geocode from "react-geocode";
// import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
class MapContainer extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     address: '',
     showingInfoWindow: false,
     activeMarker: {},
     selectedPlace: {}
   }
   // binding this to event-handler functions
   this.onMarkerClick = this.onMarkerClick.bind(this);
   this.onMapClick = this.onMapClick.bind(this);
 }
 componentDidMount(props) {
   navigator.geolocation.getCurrentPosition(
       position => {
           const { latitude, longitude } = position.coords;
           this.setState({
               userLocation: { lat: latitude, lng: longitude },
               loading: false
           });
       },
       () => {
           this.setState({ loading: false });
       }
   );
}
 onMarkerClick = (props, marker, e) => {
   this.setState({
     selectedPlace: props,
     activeMarker: marker,
     showingInfoWindow: true
   });
 }
 onMapClick = (props) => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     });
   }
 }
 render() {
 const { loading, userLocation } = this.state;
      const { google } = this.props;
      if (loading) {
          return null;
         }
   const style = {
     width: '50vw',
     height: '75vh',
     'marginLeft': 'auto',
     'marginRight': 'auto'
   }
   return (
     <GoogleMapReact
       item
       xs = { 12 }
       style = { style }
       // google={google} //
       center = {this.state.userLocation}
       google = { this.props.google }
       onClick = { this.onMapClick }
       zoom = { this.state.zoom }
       // initialCenter = {userLocation}
     >
       <Marker
         onClick = { this.onMarkerClick }
         title = { 'Changing Colors Garage' }
         position = {this.state.userLocation}
         name = { 'Changing Colors Garage' }
       />
       <InfoWindow
         marker = { this.state.activeMarker }
         visible = { this.state.showingInfoWindow }
       >
       </InfoWindow>
       {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '500px'
                            }}
                            // onPlaceSelected={ this.onPlaceSelected }
                            // types={['(regions)']}
                        />
     </GoogleMapReact>
   );
 }
}
export default GoogleApiWrapper({
 apiKey: 'AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4'
})(MapContainer);