import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reqres from './pages/Reqres';
import RandomUsers from './pages/RandomUsers';

function App() {
	return (
		<Router>
			<NavbarComponent />
			<Container>
				<Routes>
					<Route
						path='/reqres'
						element={<Reqres />}
					/>
					<Route
						path='/randomusers'
						element={<RandomUsers />}
					/>
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
