import Skeleton from 'react-loading-skeleton';
const SkeletonCard = () => {
	return (
		<>
			<div className='card'>
				<h6>
					<Skeleton />
				</h6>
				<p className='mb-0'>
					<Skeleton />
				</p>
				<p className='mb-0'>
					<Skeleton />
				</p>
				<p className='mb-0'>
					<Skeleton />
				</p>
				<p className='mb-0'>
					<Skeleton />
				</p>
			</div>
		</>
	);
};

export default SkeletonCard;
