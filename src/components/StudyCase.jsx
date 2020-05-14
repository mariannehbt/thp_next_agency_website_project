import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import studies from 'assets/studies';
import { FormattedMessage } from 'react-intl';

const StudyCase = () => {
	let { studySlug } = useParams();
	const [currentStudy, setCurrentStudy] = useState(null);

	useEffect(() => {
		setCurrentStudy(studies.find((study) => study.slug === studySlug));
	}, [studySlug]);

	if (currentStudy) {
		return <div className='container'><FormattedMessage id={`${currentStudy.id.toLowerCase()}.description`} /></div>;
	} else {
		return <div className='container'>Cette étude n'existe pas... :'(</div>;
	};
};

export default StudyCase;