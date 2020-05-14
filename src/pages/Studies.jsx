import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import studies from '../assets/studies';

const StudyCase = () => {
	let { studySlug } = useParams();
	const [currentStudy, setCurrentStudy] = useState(null);

	useEffect(() => {
		setCurrentStudy(studies.find((study) => study.slug === studySlug));
	}, [studySlug]);

	if (currentStudy) {
		return (
			<div className='container'>
				<h1>{currentStudy.id}</h1>
				<h2><FormattedMessage id={`${currentStudy.id.toLowerCase()}.title`} /></h2>
				<p><FormattedMessage id={`${currentStudy.id.toLowerCase()}.description`} /></p>
			</div>
		);
	} else {
		return (
			<div className='container'>
				<h2><FormattedMessage id='error.missingStudy' /></h2>
			</div>
		);
	};
};

export default StudyCase;