import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Works from 'pages/Works';
import LanguageContext from 'LanguageContext';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language'));
	return (
		<LanguageContext.Provider value={{ 
			currentLanguage,
			toFr: () => setCurrentLanguage('FR'),
			toEn: () => setCurrentLanguage('EN')
		}}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/works'>
						<Works />
					</Route>
				</Switch>
			</Router>
		</LanguageContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));