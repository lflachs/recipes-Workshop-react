import './App.css';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

function App() {
	return (
		<div className='App'>
			<br />
			<Button text='Click here' />
			<Loader />
		</div>
	);
}

export default App;
