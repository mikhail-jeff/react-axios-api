import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCard from '../components/SkeletonCard';

const RandomAPI = () => {
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

	useEffect(() => {
		setTimeout(() => {
			axios.get(url).then((response) => {
				setUserList(response.data);
				setIsLoading(false);
			});
		}, 3000);
	}, []);

	return (
		<>
			<h1 className='text-center'>RandomAPI.com using react-loading-skeleton</h1>
			<div className='App d-flex flex-wrap justify-content-center gap-3'>
				<SkeletonTheme
					baseColor='#696969'
					highlightColor='#0000ff'
				>
					{isLoading ? (
						<>
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</>
					) : (
						userList.slice(0, 9).map((user, index) => (
							<div
								className='card bg-primary'
								key={index}
							>
								<h6>
									<span className='fw-bold'>Fullname: </span>
									{user.first} {user.last}
								</h6>
								<p className='mb-0'>
									<span className='fw-bold'>Email: </span>
									{user.email}
								</p>
								<p className='mb-0'>
									<span className='fw-bold'>Created: </span>
									{user.created}
								</p>
								<p className='mb-0'>
									<span className='fw-bold'>Address: </span>
									{user.address}
								</p>
								<p className='mb-0'>
									<span className='fw-bold'>Balance: </span>
									{user.balance}
								</p>
							</div>
						))
					)}
				</SkeletonTheme>
			</div>
		</>
	);
};

export default RandomAPI;
