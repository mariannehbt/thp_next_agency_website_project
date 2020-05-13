import React from 'react';
import { Link } from 'react-router-dom';
import Flags from 'components/Flags';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>Agency</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/'>Accueil</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/about'>L'agence</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/works'>Projets</Link>
					</li>
				</ul>
					<Flags />
			</div>
		</nav>
	);
};

export default Navbar;