// Modules
import React from 'react';

// Components
import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
	state = {
		meals: [],
		loading: true,
	};
	componentDidMount() {
		fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
			.then((resp) => resp.json())
			.then((data) => this.setState({ meals: data.meals, loading: false }));
	}
	render() {
		return (
			<div className='Homepage'>
				{this.state.loading ? (
					<Loader />
				) : (
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						{this.state.meals.map((meal, idx) => {
							// <Link to={`/meals/${meal.idMeal}`}>
							return (
								<Card
									id={meal.idMeal}
									key={idx}
									onFavorite={() => this.props.onFavorite(meal)}
									isFavorite={this.props.isFavorite(meal)}
									favorites={this.props.favorites}
									image={meal.strMealThumb}
									title={meal.strMeal}
								/>
							);
							// </Link>
						})}
					</div>
				)}
			</div>
		);
	}
}

export default Homepage;
