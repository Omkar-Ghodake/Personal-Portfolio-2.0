import React from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import '../css/portfolio.css'
import MyInternships from './MyInternships';
import MyProjects from './MyProjects';
// import MyResume from './MyResume';
import MySkills from './MySkills';
import MyTools from './MyTools';

const Portfolio = () => {

	const words = ['PORTFOLIO']

	return (
		<>
			<div className="container my-3">
				<div className="about-me-title text-center page-title-size">
					<p>MY <span className="change-color-tertiary m-0">
						<Typewriter
							words={ words }
							typeSpeed={ 200 }
							deleteSpeed={ 150 }
							loop={ 0 } />
						<Cursor />
					</span></p>
				</div>

				{/* my skills */ }
				<MySkills />
				<hr className='mt-5 mb-4' />
				{/* my skills */ }
				{/* <MyResume />
				<hr className='mt-5 mb-4' /> */}
				{/* my projects */ }
				<MyProjects />
				<hr className='mt-5 mb-4' />
				{/* my tools */ }
				<MyTools />
				<hr className='mt-5 mb-4' />
				{/* my internships */ }
				<MyInternships />
			</div>
		</>
	)
}

export default Portfolio