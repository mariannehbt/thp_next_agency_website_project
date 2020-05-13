import React from 'react';
import { FormattedMessage } from 'react-intl';

const Works = () => {
	return (
		<div className='container'>
			<h1>Projets</h1>
			<h2><FormattedMessage id='works.title' /></h2>
			<p><FormattedMessage id='works.text1' /></p>
		</div>
	);
};

export default Works;