// Modules
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// CSS
import './App.css';

// Components
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';
import Homepage from './Pages/Homepage';
import ProductInfo from './Pages/ProductInfo';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/meals/:meal' exact component={ProductInfo} />
					<Route path='/' exact component={Homepage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
