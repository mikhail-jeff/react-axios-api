import Contacts from './components/Contacts';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<div className=''>
			<NavbarComponent />
			<Container>
				<Contacts />
			</Container>
		</div>
	);
}

export default App;
