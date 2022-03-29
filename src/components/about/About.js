import React, { useContext } from 'react';
import '../css/about.css';
import ThemeContext from '../../context/theme/ThemeContext';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import MyInfo from './MyInfo';
import MyStats from './MyStats';

const About = () => {

	const contextTheme = useContext(ThemeContext);
	const { theme } = contextTheme;

	const words = ['ME'];

	return (
		<>
			<div className="container my-3">
				<div className="about-me-title text-center page-title-size">
					<p>ABOUT <span className="change-color-tertiary m-0">
						<Typewriter
							words={words}
							typeSpeed={200}
							deleteSpeed={150}
							loop={0} />
						<Cursor />
					</span></p>
				</div>

				<div className="row about-me-body justify-content-center">
					<div className="row gx-3">
						<div className="col-lg-7 d-flex align-items-center">
							<MyInfo />
						</div>
						<div className="col-lg-5">
							<MyStats />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About