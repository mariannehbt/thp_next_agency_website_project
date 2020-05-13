import React from 'react';
import { withLanguage } from 'LanguageContext';

const Flags = ({ lg }) => {
	if (lg.currentLanguage === 'FR') {
		return <button className='btn btn-outline-info my-2 my-sm-0' onClick={lg.toEn}>FR</button>;
	} else {
		return <button className='btn btn-outline-info my-2 my-sm-0' onClick={lg.toFr}>EN</button>;
	}
};

export default withLanguage(Flags);