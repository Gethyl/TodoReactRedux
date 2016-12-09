import React from "react";
import ReactDOM from "react-dom"; 
import {AddPin,RemovePin} from "../../Actions/MapActions";
import Redux from "redux";
import { connect} from "react-redux";


import NavigationBar from "../NavigationBar";
import SubAbout from "./SubAbout";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";

import update from 'immutability-helper';


const mapStateToProps = (state) => ({
  markers: state.mapsReducer.markers
})

@connect(mapStateToProps)
export default class About extends React.Component{
	
	handleMapClick (event) {
		var newMarker = {
		                    position: event.latLng,
		                    defaultAnimation: 2,
		                    key: Date.now()// Add a key property for: http://fb.me/react-warning-keys
		                }
        this.props.dispatch(AddPin(newMarker));
    }

    handleMarkerRightclick (index, event) {
        this.props.dispatch(RemovePin(index));
    }


	render(){	
		return(
			<div>
				<NavigationBar/>

				<Grid>
					<Row>
						<Col xs={12} md={8}>
					      	&nbsp;
				      	</Col>
			      	</Row>
				    <Row >

				      <Col xs={12} md={8}>
							<GoogleMapLoader
						        containerElement={
						          <div
						            style={{height: "500px",}}
						          />
						        }
						        googleMapElement={
						          <GoogleMap
						            ref={(map) => console.log(map)}
						            defaultZoom={5}
						            defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
						            defaultOptions = {{
						            					streetViewControl:false
						        					 }}
						          	onClick={this.handleMapClick.bind(this)}>
						                {this.props.markers.map((marker, index) => {
						              return (
						                <Marker
						                  {...marker}
						                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
						              );
						            })}
						          </GoogleMap>
						        }
					        />
				      </Col>
				    </Row>
			    </Grid>

			    <SubAbout></SubAbout>
				
			</div>
		);
	}
}

 

