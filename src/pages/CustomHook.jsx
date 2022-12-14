import React from 'react';
import useFetch from '../customHook/useFetch';
import { SpinnerDotted } from 'spinners-react';

const CustomHook = () => {
	const { data: joke, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any');

	if (loading) {
		return (
			<h1 className='text-center mt-5'>
				<SpinnerDotted
					color='#0000ff'
					size={80}
					speed={100}
				/>
			</h1>
		);
	}

	if (error) {
		console.log(error);
	}
	return (
		<>
			<h1 className='text-center mb-5'>Custom useFetch Hook</h1>
			<div className='text-dark mt-5 text-center'>
				<h4>
					"{joke?.setup} : {joke?.delivery}"
				</h4>
				<button
					className='btn btn-primary btn-sm text-dark'
					onClick={refetch}
				>
					Refetch
				</button>
			</div>
		</>
	);
};

export default CustomHook;
