import { useState, useEffect } from 'react';

export function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(false);

	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
			.then((resp) => resp.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => setErrors(true));
	}, []);

	return [data, loading, errors];
}
