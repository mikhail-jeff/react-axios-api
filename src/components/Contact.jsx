import { Button, Card } from 'react-bootstrap';

const Contact = ({ contact }) => {
	return (
		<div>
			<Card className='my-5 p-2 rounded h-90 bg-primary shadow-lg'>
				<Card.Img
					className='img-fluid'
					src={contact.picture.large}
				/>
				<Card.Body className=''>
					<Card.Title>
						<span className='fw-medium'>{`${contact.name.title} ${contact.name.first} ${contact.name.last}`}</span>
					</Card.Title>
					<Card.Subtitle className='my-1 fw-medium'>Complete Address:</Card.Subtitle>
					<Card.Text className='ms-3'>
						<div>
							<span className='h6 fw-medium'>Number: </span>
							{contact.location.street.number}
						</div>
						<div>
							<span className='h6 fw-medium'>Street: </span>
							{contact.location.street.name}
						</div>
						<div>
							<span className='h6 fw-medium'>City: </span>
							{contact.location.city}
						</div>
						<div>
							<span className='h6 fw-medium'>State: </span>
							{contact.location.state}
						</div>
						<div>
							<span className='h6 fw-medium'>Country: </span>
							{contact.location.country}
						</div>
					</Card.Text>
					<Card.Subtitle className='mb-2 fw-medium'>
						Date of Birth: <span className='fw-normal'>{contact.dob.date.slice(0, 10)}</span>
					</Card.Subtitle>
					<Card.Subtitle className='mb-2 fw-medium'>
						Phone: <span className='fw-normal'>{contact.phone}</span>
					</Card.Subtitle>
					<Card.Subtitle className='mb-2 fw-medium'>
						Email: <span className='fw-normal'>{contact.email}</span>
					</Card.Subtitle>
					<a href={`mailto:${contact.email}`}>
						<Button
							className='w-100 mt-3'
							variant='dark'
							style={{ borderRadius: '20px' }}
						>
							Contact
						</Button>
					</a>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Contact;
