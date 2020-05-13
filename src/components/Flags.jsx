import { withLanguage } from 'LanguageContext';

const Flags = ({ lg }) => {
	return (lg.language);
};

export default withLanguage(Flags);
