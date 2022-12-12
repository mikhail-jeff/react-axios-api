import axios from 'axios';

const style = {
	backgroundColor: 'blue',
	color: 'white',
	padding: '4px 8px',
	border: 'none',
	borderRadius: '4px',
	display: 'block',
	marginBottom: '4px',
};

const Reqres = () => {
	// * DEFAULT HEADERS
	axios.defaults.headers.common['authorization'] = 12345;

	// * AXIOS INSTANCE
	const instance = axios.create({
		baseURL: 'https://reqres.in/api',
		timeout: 1000,
		headers: { 'X-Custom-Header': 'foobar' },
	});

	const instanceData = () => {
		instance.get('/users').then((response) => {
			console.log(response.data);
		});
	};

	// * DEFAULT URL
	axios.defaults.baseURL = 'https://reqres.in/api';

	// * GET ALL DATA
	const getData = () => {
		axios
			.get('/users')
			.then((data) => {
				console.log(data.data);
			})
			.catch((response) => {
				console.log(response);
			});
	};

	// * POST DATA
	// const postData = () => {
	// 	axios
	// 		.post('/users', {
	// 			first_name: 'John Doe',
	// 			email: 'johndoe@gmail.com',
	// 		})
	// 		.then((response) => {
	// 			console.log(response.data);
	// 		});
	// };

	// * other way to post data
	const config = {
		data: {
			first_name: 'John Doe',
			email: 'johndoe@gmail.com',
		},
		headers: {
			'content-type': 'application/json',
		},
	};

	const postData = () => {
		axios.post('/users', config).then((response) => {
			console.log(response.data);
		});
	};

	// * UPDATE DATA
	const updateData = async () => {
		try {
			const response = await axios.put('users/2', {
				name: 'Jane Doe',
				email: 'janedoe@gmail.com',
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	// * DELETE DATA
	const deleteData = () => {
		axios.delete('users/2').then((response) => {
			console.log(response.status);
		});
	};

	// * MULTIPLE DATA
	const multiple = () => {
		Promise.all([axios.get('https://reqres.in/api/users?page=2'), axios.post('https://reqres.in/api/users', config)]).then((response) => {
			console.log(response[0], response[1]);
		});
	};

	return (
		<>
			<div className='grid'>
				<button
					style={style}
					onClick={getData}
				>
					Get
				</button>
				<button
					style={style}
					onClick={postData}
				>
					Post
				</button>
				<button
					style={style}
					onClick={updateData}
				>
					Update
				</button>
				<button
					style={style}
					onClick={deleteData}
				>
					Delete
				</button>
				<button
					style={style}
					onClick={instanceData}
				>
					Instance
				</button>
				<button
					style={style}
					onClick={multiple}
				>
					Multiple
				</button>
			</div>
		</>
	);
};

export default Reqres;
