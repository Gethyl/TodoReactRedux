import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory, Link} from "react-router";

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import Layout from "./components/Layout";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import todoReducer from "./Reducers/Reducers";


const app = document.getElementById('app');

const store = createStore(todoReducer);
// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
   		<Router history={browserHistory}>
     		<Route path="/" component={Layout} />
     			<Route path="about" component={About} />
      			<Route path="help" component={Help}/>
    	</Router>
  	</Provider>
	, app);
