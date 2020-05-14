import React from 'react';
import { FormattedMessage } from 'react-intl';
import studies from 'assets/studies';
import { Link } from 'react-router-dom';

const Works = () => {
	let studiesList = studies.map((study, key) => (
		<div key={key}>
			<div className='card my-3'>
				<div className='card-body'>
					<h5 className='card-title'>{study.id}</h5>
					<p className='card-text'><FormattedMessage id={`${study.id.toLowerCase()}.title`} /></p>
					<Link className='btn btn-outline-info' to={`/works/${study.slug}`}><FormattedMessage id='works.studiesBtn' /></Link>
				</div>
			</div>
		</div>
	));

	return (
		<div className='container'>
			<h1><FormattedMessage id='works.name' /></h1>
			<h2><FormattedMessage id='works.title' /></h2>
			<p><FormattedMessage id='works.text1' /></p>
			{studiesList}
		</div>
	);
};

export default Works;