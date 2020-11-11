import React, { useState, useEffect } from 'react';
import './App.css';

import useFetch from './useFetch';

import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';

function App() {
	// With custom hooks
	// const [meals, loading, errors] = useFetch(
	// 	'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
	// );

	// With useEffect...

	// const [meals, setMeals] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [errors, setErrors] = useState(false);
	// useEffect(() => {
	// 	fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
	// 		.then((resp) => resp.json())
	// 		.then((data) => setMeals(data.meals))
	// 		.catch((err) => setErrors(true));
	// }, []);

	console.log(meals);
	return (
		<div className='App'>
			<br />
			<Button text='Click here' />
			<Loader />
			<Card
				image='https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg'
				title='Food'
			/>
		</div>
	);
}

export default App;
