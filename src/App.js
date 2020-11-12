// Modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CSS
import './App.css';

// Components

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
