import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth(code) {
	const [accessToken, setAccessToken] = useState();
	const [refreshToken, setRefreshToken] = useState();
	const [expiresIn, setExpiresIn] = useState();

	useEffect(() => {
		console.log('calling login');

		async function fetchTokens(code) {
			try {
				const res = await axios.post('http://localhost:8080/spotify/login', { code });
				setAccessToken(res.data.accessToken);
				setRefreshToken(res.data.refreshToken);
				setExpiresIn(res.data.expiresIn);

				window.history.pushState({}, null, '/create-session');
			} catch (error) {
				window.location = '/create';
			}
		}

		fetchTokens(code);

	}, [code]);

	useEffect(() => {
		if (!refreshToken || !expiresIn) return;
		const interval = setInterval(() => {
			async function fetchRefresh(refreshToken) {
				try {
					const res = await axios.post('http://localhost:8080/spotify/refresh', { refreshToken });
					console.log(res.data);
					setAccessToken(res.data.accessToken);
					setExpiresIn(res.data.expiresIn);
				} catch (error) {
					window.location = '/create';
				}
			}

			fetchRefresh(refreshToken);
		}, (expiresIn - 60) * 1000);

		return () => clearInterval(interval);
	}, [refreshToken, expiresIn]);

	return accessToken;
}