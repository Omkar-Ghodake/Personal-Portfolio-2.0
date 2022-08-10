import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import ThemeContext from '../context/theme/ThemeContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

	const location = useLocation();

	const contextTheme = useContext(ThemeContext);
	const { theme, toggleTheme } = contextTheme;

	useEffect(() => {
		document.body.classList.add(`${theme}-theme`);
	});

	return (
		<>
			<nav className="navbar navbar-expand-lg sticky-top">
				<div className="container-fluid"><button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation"><i className="fa-solid fa-bars"></i></button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item"><Link className={`nav-link ${location.pathname === '/' && "current"}`} to="/">Home</Link></li>
							<li className="nav-item"><Link className={`nav-link ${location.pathname === '/about' && "current"}`} to="/about">About</Link></li>
							<li className="nav-item"><Link className={`nav-link ${location.pathname === '/portfolio' && "current"}`} to="/portfolio">Portfolio</Link></li>
							<li className="nav-item"><Link className={`nav-link ${location.pathname === '/contact' && "current"}`} to="/contact">Contact</Link></li>
						</ul>
						<div className="d-flex theme-icon-contain align-items-center">
							{
								theme === 'light' ? <i className="fa-solid fa-moon theme-icon d-flex align-items-center px-2" onClick={toggleTheme}></i> : <i className="fa-solid fa-sun theme-icon d-flex align-items-center px-2" onClick={toggleTheme}></i>
							}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar