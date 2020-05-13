import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
	return (
		<div className='container'>
			<h1>L'agence</h1>
			<h2><FormattedMessage id='about.title' /></h2>
			<p><FormattedMessage id='about.text1' /></p>
			<p><FormattedMessage id='about.text2' /></p>
		</div>
	);
};

export default About;