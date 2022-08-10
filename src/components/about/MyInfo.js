import React from 'react';

const MyInfo = () => {
	return (
		<>
			<div className={`p-3 card-shadow border-12 w-100`}>
				<div className="row">
					<div className="col-md-6">
						<p>First Name: <strong>Omkar</strong></p>
						<p>Age: <strong>21</strong></p>
						<p>State: <strong>Maharashtra</strong></p>
						<p>City: <strong>Pune</strong></p>
					</div>
					<div className="col-md-6">
						<p>
							Last Name: <strong>Ghodake</strong>
						</p>
						<p>
							College: <strong>NBN SSOE, Pune</strong>
						</p>
						<p>
							Email: <strong>
								<a className='tertiary-anchor' href="mailto: omkar.a.g.78@gmail.com" target='_blank' rel="noreferrer">omkar.a.g.78@gmail.com</a>
							</strong>
						</p>
						<p>LinkedIn: <strong>
							<a className='tertiary-anchor' href="https://www.linkedin.com/in/omkar-ghodake/" target='_blank' rel="noreferrer">omkar-ghodake</a>
						</strong>
						</p>
					</div>
				</div>
			</div>

		</>
	)
}

export default MyInfo