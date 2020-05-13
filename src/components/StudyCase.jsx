import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import studies from 'assets/studies';

const StudyCase = () => {
	let { studySlug } = useParams();
	const [currentStudy, setCurrentStudy] = useState(null);

	useEffect(() => {
		setCurrentStudy(studies.find((study) => study.slug === studySlug));
	})

	if (currentStudy) {
    return currentStudy.description;
  } else {
    return "Cette étude n'existe pas... :'(";
  };
};

export default StudyCase;