import React from 'react';
import '../css/home.css';
// import myImage from '../images/my-image.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

	const words = ['I\'M OMKAR GHODAKE']

	return (
		<>
			<div className="container my-5">
				<div className="row home-main">
					<div className="col-lg-8 col-md-12 home-cols mx-auto">
						<div className="my-name" style={{ height: '5rem', width: 'fit-content' }}>
							<h1>
								<Typewriter
									words={words}
									cursor
									cursorStyle={'_'}
									loop={0} />
							</h1>
						</div>
						<div className=" card-shadow border-8 p-4">
							<div className="my-field">
								<h1>FULL STACK WEB DEVELOPER INTERN</h1>
							</div>
							<div className="my-description">
								<p>I'm currently pursuing my BE from NBN Sinhgad School of Engineering, Savitribai Phule Pune University a.k.a.SPPU. I'm skilled in Web Design, Web Development (Frontend + Backend), Database, etc. I'm passionate about building Web Apps.</p>
							</div>
						</div>
					</div>

					{/* <div className="col-lg-4 col-md-12 home-cols">
						<img className='myImage card-shadow rounded-circle' src={myImage} alt="" />
					</div> */}
				</div>
			</div>

		</>
	)
}

export default Home