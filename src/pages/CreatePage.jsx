import React from 'react';
import SpotifyAuthPage from './SpotifyAuthPage.jsx';
import CreateSessionPage from './CreateSessionPage.jsx';

const code = new URLSearchParams(window.location.search).get('code');

const CreatePage = () => {

	return code ? <CreateSessionPage code={ code }/> : <SpotifyAuthPage/>;
};

export default CreatePage;