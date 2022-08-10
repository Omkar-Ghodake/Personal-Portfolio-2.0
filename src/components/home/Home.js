import React from 'react';
import '../css/home.css';
import myImage from '../images/my-image.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

	const words = ['I\'M OMKAR GHODAKE']

	return (
		<>
			<div className="container my-5">
				<div className="my-name" style={ { height: '5rem', width: 'fit-content' } }>
					<h1>
						<Typewriter
							words={ words }
							cursor
							cursorStyle={ '_' }
							loop={ 0 } />
					</h1>
				</div>
				<div className="row g-4 home-main justify-content-center align-items-center">
					<div className="col-lg-8 col-md-12 home-cols mx-auto">
						<div className="card-shadow border-8 p-4">
							<div className="my-field">
								<h1>BLOCKCHAIN APPLICATION DEVELOPER</h1>
							</div>
							<div className="my-description">
								<p>A Proficient <strong>Blockchain Developer</strong> interested in contributing expertise in <strong>Web</strong> and <strong> Blockchain App Development</strong>. Passionate <strong>BE Student</strong> with a good hands-on experience in <strong>Full Stack Web Development</strong> with various web frameworks and libraries. Deeply knowledgeable in <strong>Cryptocurrency, Decentralized Applications(DApps), Smart Contracts, Distributed Ledger</strong> along with slight knowledge of <strong>Blockchain Mining</strong> and <strong>Cryptography</strong>.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 home-cols">
						<img className='myImage card-shadow rounded-circle' src={ myImage } alt="" />
					</div>
				</div>
			</div>

		</>
	)
}

export default Home