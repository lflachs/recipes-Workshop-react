import { useState, useEffect } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((err) => setErrors(true));
	}, []);
	return [data, loading, errors];
}
