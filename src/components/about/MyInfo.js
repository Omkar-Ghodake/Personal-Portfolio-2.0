import React from 'react';

const MyInfo = () => {
	function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	const myBirthdate = "2001/01/18"

	return (
		<>
			<div className={ `p-3 card-shadow border-12 w-100` }>
				<div className="aboutDash d-flex flex-column flex-wrap">
					<p>First Name: <strong>Omkar</strong></p>
					<p>
						Last Name: <strong>Ghodake</strong>
					</p>
					<p>Age: <strong>{ getAge(myBirthdate) } Years</strong></p>
					<p>State: <strong>Maharashtra</strong></p>
					<p>City: <strong>Pune</strong></p>
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

		</>
	)
}

export default MyInfo