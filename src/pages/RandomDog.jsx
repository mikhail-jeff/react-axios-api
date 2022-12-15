import { useState, useEffect } from 'react';

const RandomDog = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((data) => {
				setData(data.message);
			});
	}, []);

	return (
		<div className='text-center mb-5'>
			<h1>Random Dog API</h1>
			<img
				className='rounded-circle img-fluid'
				width={500}
				height={500}
				src={data}
				alt='doggy'
			/>
		</div>
	);
};

export default RandomDog;
