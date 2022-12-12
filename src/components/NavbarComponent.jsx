import { Container, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
	return (
		<>
			<Navbar
				sticky='top'
				bg='primary'
				variant='dark'
			>
				<Container>
					<Navbar.Brand
						className='text-dark h1'
						href='#home'
					>
						Contact Details
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarComponent;
