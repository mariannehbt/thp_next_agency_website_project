import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import studies from '../assets/studies';
import Flags from './Flags';

const Navbar = () => { 
	let studiesList = studies.map((study, key) => (
		<div key={key}>
			<Link className='nav-link' to={`/works/${study.slug}`}>{study.id}</Link>
		</div>
	));

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>Flamingo</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/'><FormattedMessage id='home.name' /></Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/about'><FormattedMessage id='about.name' /></Link>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/works' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><FormattedMessage id='works.name' /></Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/works'><FormattedMessage id='works.all' /></Link>
							<div className='dropdown-divider'></div>
							{studiesList}
						</div>
					</li>
				</ul>
					<Flags />
			</div>
		</nav>
	);
};

export default Navbar;