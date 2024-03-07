function hander(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.include('@') ||
			!name ||
			name.tril() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}
	}

	const newMessage = {
		email,
		name,
		messsage,
	};

	res
		.statu(201)
		.json({ message: 'Successfully stored massage!', message: newMessage });
}

export default hander;
