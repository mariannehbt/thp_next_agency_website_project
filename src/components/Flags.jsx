import React from 'react';
import { withLanguage } from 'LanguageContext';

const Flags = ({ lg }) => {
	localStorage.setItem('language', lg.currentLanguage);
	if (lg.currentLanguage === 'EN') {
		return <button className='btn btn-outline-info my-2 my-sm-0' onClick={lg.toFr}>Français</button>;
	} else {
		return <button className='btn btn-outline-info my-2 my-sm-0' onClick={lg.toEn}>English</button>;
	}
};

export default withLanguage(Flags);