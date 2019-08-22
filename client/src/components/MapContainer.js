import React, { Component } from 'react';
import Map from './MapAdress';
class MapContainer extends Component {
   render() {
       return(
           <div style={{ margin: '100px' }}>
               <Map
                   google={this.props.google}
                   center={{lat: 40, lng: 5}}
                   height='800px'
                   zoom={15}
               />
           </div>
       );
   }
}
export default MapContainer


