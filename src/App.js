// Modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CSS
import './App.css';

// Components

import Homepage from './Pages/Homepage';
import ProductInfo from './Pages/ProductInfo';

class App extends React.Component {
	state = {
		favorites: [],
	};

	handleFavorite(recipeItem) {
		const isFavorite = () =>
			this.state.favorites.some((recipe) => recipe.id === recipeItem.id);

		if (isFavorite(recipeItem)) {
			this.removeFavorite(recipeItem);
		} else {
			this.addFavorite(recipeItem);
		}
	}
	removeFavorite(favoriteItem) {
		this.setState({
			favorites: this.state.favorites.filter(
				(recipe) => recipe.id !== favoriteItem.id
			),
		});
	}
	addFavorite(favoriteItem) {
		this.setState({ favorites: [...this.state.favorites, favoriteItem] });
	}
	render() {
		return (
			<Router>
				<button onClick={() => this.handleFavorite({ id: 1, text: 'test' })}>
					test
				</button>
				<Switch>
					<Route path='/meals/:meal' exact component={ProductInfo} />
					<Route path='/' exact component={Homepage} />
					<Route path='/favorite' exact component={Homepage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
