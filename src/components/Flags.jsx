import React from 'react';
import { withLanguage } from '../LanguageContext';
import FlagEn from '../assets/img/flag-en.png';
import FlagFR from '../assets/img/flag-fr.png';

const Flags = ({ lg }) => {
	localStorage.setItem('language', lg.currentLanguage);
	if (lg.currentLanguage === 'en') {
		return <button className='btn btn-outline-info my-2 my-sm-0 p-0' onClick={lg.toFr}><img className='rounded' width='50' src={FlagFR} alt='Français' /></button>;
	} else {
		return <button className='btn btn-outline-info my-2 my-sm-0 p-0' onClick={lg.toEn}><img className='rounded' width='50' src={FlagEn} alt='English' /></button>;
	}
};

export default withLanguage(Flags);