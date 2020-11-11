import React from 'react';
import ErrorAnimation from '../components/Loader/Error';

class ProductInfo extends React.Component {
	state = {
		meal: [],
		err: false,
	};
	componentDidMount() {
		fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.meal}`
		)
			.then((resp) => {
				resp.json();
			})
			.then((data) => this.setState({ meal: data.meals[0] }))
			.catch((err) => this.setState({ err: true }));
	}
	render() {
		// const params = this.props.match.params;
		console.log(this.props);
		return this.state.err ? (
			<ErrorAnimation />
		) : (
			<>
				<h1>{this.state.meal.strMeal}</h1>
				<img src={this.state.meal.strThumbnail} alt={this.state.meal.strMeal} />
				<h3>Ingredients</h3>
				<h3>Instructions:</h3>
				<p>{this.state.meal.strInstructions}</p>
			</>
		);
	}
}

export default ProductInfo;
