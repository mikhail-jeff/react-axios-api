import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch(() => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	const refetch = () => {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch(() => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return { data, loading, error, refetch };
};

export default useFetch;
