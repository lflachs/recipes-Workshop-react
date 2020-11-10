import React from 'react';
import './App.css';

import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';
function App() {
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
