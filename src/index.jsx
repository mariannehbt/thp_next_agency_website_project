import React from 'react';
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
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
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
	);
};

ReactDOM.render(<App />, document.getElementById('root'));