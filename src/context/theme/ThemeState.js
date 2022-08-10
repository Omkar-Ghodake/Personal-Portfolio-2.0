import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeState = (props) => {

	const [theme, setTheme] = useState(
		localStorage.getItem('ogPortfolioTheme') === null ? 'light' : localStorage.getItem('ogPortfolioTheme')
	);

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			document.body.classList.add('dark-theme');
			localStorage.setItem('ogPortfolioTheme', 'dark');
		} else {
			setTheme('light');
			document.body.classList.remove('dark-theme');
			localStorage.setItem('ogPortfolioTheme', 'light');
		}
	}

	return (
		<>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				{props.children}
			</ThemeContext.Provider>
		</>
	)
}

export default ThemeState