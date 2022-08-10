import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ContactItems from './ContactItems';

const Contact = () => {

	const words = ['TOUCH'];

	return (
		<>
			<div className="container my-3">
				<div className="about-me-title text-center page-title-size">
					<p>GET IN <span className="change-color-tertiary m-0">
						<Typewriter
							words={words}
							typeSpeed={200}
							deleteSpeed={150}
							loop={0} />
						<Cursor />
					</span></p>
				</div>

				<ContactItems />
			</div>
		</>
	)
}

export default Contact