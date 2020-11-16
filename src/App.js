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
	isFavorite = (item) => {
		return this.state.favorites.some((recipe) => recipe.idMeal === item.idMeal);
	};
	handleFavorite(recipeItem) {
		if (this.isFavorite(recipeItem)) {
			this.removeFavorite(recipeItem);
		} else {
			this.addFavorite(recipeItem);
		}
	}
	removeFavorite(favoriteItem) {
		console.log('remove');
		this.setState({
			favorites: this.state.favorites.filter(
				(recipe) => recipe.idMeal !== favoriteItem.idMeal
			),
		});
	}
	addFavorite(favoriteItem) {
		console.log('addFav');
		this.setState({ favorites: [...this.state.favorites, favoriteItem] });
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/meals/:meal' exact component={ProductInfo} />
					<Route path='/' exact>
						<Homepage
							favorites={this.state.favorites}
							onFavorite={(item) => this.handleFavorite(item)}
							isFavorite={(id) => this.isFavorite(id)}
						/>
					</Route>
					{/* <Route path='/favorite' exact component={Favorite} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
