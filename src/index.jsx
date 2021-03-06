import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import LanguageContext from './LanguageContext';
import messagesEn from './assets/translation/en';
import messagesFr from './assets/translation/fr';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Studies from './pages/Studies';
import Works from './pages/Works';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const messages = {
	fr: messagesFr,
	en: messagesEn,
};

const App = () => {
	const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'fr');
	return (
		<LanguageContext.Provider value={{ 
			currentLanguage,
			toFr: () => setCurrentLanguage('fr'),
			toEn: () => setCurrentLanguage('en')
		}}>
			<IntlProvider locale={currentLanguage} messages={messages[currentLanguage]}>
				<Router basename={process.env.PUBLIC_URL}>
					<Navbar />
					<Switch>
						<Route path='/about'>
							<About />
						</Route>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path={`/works/:studySlug`}>
							<Studies />
						</Route>
						<Route exact path='/works'>
							<Works />
						</Route>
					</Switch>
				</Router>
			</IntlProvider>
		</LanguageContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));