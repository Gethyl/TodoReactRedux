import React from "react";
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class NavigationBar extends React.Component{
	constructor() {
		super();
		this.state = {title:"TO   DO    LIST"};
	}

	changeTitle(title){
		this.setState({title});
	}

	 

	render(){	

		
		// let brand = <a href='#'>Project Name</a>;
		// console.log(this.props.children)	;
		return(
			<div>
				<Navbar  fixedTop inverse >
			        <Nav  >
			        	<LinkContainer to="/">
				          <NavItem >Home</NavItem>
				        </LinkContainer>
				        <LinkContainer to="/about">
				          <NavItem >About</NavItem>
				        </LinkContainer>
				        <LinkContainer to="/help">
				          <NavItem >Help</NavItem>
				        </LinkContainer>	      				  
			        </Nav>
		      	</Navbar>

			</div>
		);
	}
}