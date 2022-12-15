import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reqres from './pages/Reqres';
import RandomUsers from './pages/RandomUsers';
import RandomAPI from './pages/RandomAPI';
import CustomHook from './pages/CustomHook';
import RandomDog from './pages/RandomDog';

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
					<Route
						path='/randomapi.com'
						element={<RandomAPI />}
					/>
					<Route
						path='/v2.jokeapi.dev'
						element={<CustomHook />}
					/>
					<Route
						path='/dog.ceo'
						element={<RandomDog />}
					/>
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
