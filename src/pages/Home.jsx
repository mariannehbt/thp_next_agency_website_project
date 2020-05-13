import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
	return (
		<div className='container'>
			<h1>Accueil</h1>
			<h2><FormattedMessage id='home.title' /></h2>
			<p><FormattedMessage id='home.text1' /></p>
			<p><FormattedMessage id='home.text2' /></p>
		</div>
	);
};

export default Home;