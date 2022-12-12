import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Contact from '../components/Contact';

const RandomUsers = () => {
	useEffect(() => {
		getContacts();
	}, []);

	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(false);

	const getContacts = async () => {
		try {
			const response = await axios.get('https://randomuser.me/api/?results=30');
			setContacts(response.data.results);
			setLoading(true);
		} catch (error) {
			alert({ message: error.message });
		}
	};
	return (
		<>
			<h1 className='text-center'>Fetch API(Random User API)</h1>
			<Row>
				{loading &&
					contacts.map((contact) => (
						<Col
							sm={12}
							md={6}
							lg={4}
							key={contact.login.uuid}
						>
							<Contact contact={contact} />
						</Col>
					))}
			</Row>
		</>
	);
};

export default RandomUsers;
