import React from "react";
import ReactDOM from "react-dom"; 
import NavigationBar from "../NavigationBar";
import SubAbout from "./SubAbout";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";


import update from 'immutability-helper';


export default class About extends React.Component{
	
	state = {
         markers: [{
             position: {
                 lat: 12.9716,
                 lng: 77.5946,
             },
             key: "Bangalore",
             defaultAnimation: 2
         }]
     };

	// constructor(props) {
	// 	super(props);
	// 	console.dir(props);
	// }

	handleMapClick (event) {
        var {markers} = this.state;

        markers = update(markers, {
            $push: [
                {
                    position: event.latLng,
                    defaultAnimation: 2,
                    key: Date.now()// Add a key property for: http://fb.me/react-warning-keys
                },
            ],
        });
        this.setState({ markers });

        if (3 === markers.length) {
            this.props.toast(
                "Right click on the marker to remove it",
                "Also check the code!"
            );
        }
    }

    handleMarkerRightclick (index, event) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        var {markers} = this.state;
        markers = update(markers, {
            $splice: [
                [index, 1]
            ],
        });
        this.setState({ markers });
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
						          	onClick={this.handleMapClick}>
						                {this.state.markers.map((marker, index) => {
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
				
			</div>
		);
	}
}

 

