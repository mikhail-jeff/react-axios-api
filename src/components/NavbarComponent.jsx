import { Link } from 'react-router-dom';

const NavbarComponent = () => {
	return (
		<nav>
			<ul className='d-flex gap-5 list-unstyled bg-primary p-3'>
				<li className='nav-item'>
					<Link
						className='text-decoration-none text-dark h5 fw-medium'
						to='/reqres'
					>
						Reqres.in
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='text-decoration-none text-dark h5 fw-medium'
						to='randomusers'
					>
						RandomUserAPI
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='text-decoration-none text-dark h5 fw-medium'
						to='/randomapi.com'
					>
						RandomAPI.com
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarComponent;
