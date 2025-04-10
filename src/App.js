import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [password, setPassword] = useState('');
	const [isVerified, setIsVerified] = useState(false);

	const checkPassword = (event) => {
		event.preventDefault();

		if (password === 'd') {
			setIsVerified(true);
		}
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleAudioPlay = async () => {
		await axios
			.post('https://dontgiveupserver2-nani31-13-nanis-projects-516ea688.vercel.app/rout', {
				timestamp: new Date().toISOString(),
			})
			.then((response) => {
				console.log('Data sent successfully:', response);
			})
			.catch((error) => {
				console.error('Error sending data:', error);
			});
	};

	return (
		<>
			<div>
				{!isVerified ? (
					<div id="formDiv">
						<form id="passwordForm" onSubmit={checkPassword}>
							<input type="password" id="passwordInput" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
							<br />
							<br />
							<button type="submit">Verify</button>
						</form>
					</div>
				) : (
					<div id="audioDiv">
						<audio id="audio" controls controlsList="nodownload" onPlay={handleAudioPlay}>
							<source src={`${process.env.PUBLIC_URL}/ad.mp3`} type="audio/mpeg" />
						</audio>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
