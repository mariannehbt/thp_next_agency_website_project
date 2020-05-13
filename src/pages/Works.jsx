import React from 'react';
import { FormattedMessage } from 'react-intl';
import studies from 'assets/studies';
import { Link } from 'react-router-dom';

const Works = () => {
	let studiesList = studies.map((study) => (
		<div className='card my-3'>
			<div className='card-body'>
				<h5 className='card-title'>{study.name}</h5>
				<p className='card-text'>{study.title}</p>
				<Link className='btn btn-outline-info' to={`/works/${study.slug}`}>Accéder à l'étude</Link>
			</div>
		</div>
	));

	return (
		<div className='container'>
			<h1>Projets</h1>
			<h2><FormattedMessage id='works.title' /></h2>
			<p><FormattedMessage id='works.text1' /></p>
			{studiesList}
		</div>
	);
};

export default Works;