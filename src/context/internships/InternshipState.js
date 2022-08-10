import React, { useState } from 'react'
import InternshipContext from './InternshipContext'

const InternshipState = (props) => {

	const [internships] = useState([
		{ name: 'Full Stack Web Development', company: 'Always Sahi Consultancy', duration: { from: '8 Feb, 2022', to: '8 Mar, 2022' } },
		{ name: 'Full Stack Web Development', company: 'TwoWaits Technologies Pvt.', duration: { from: 'Mar 15, 2022', to: 'Apr 15, 2022' } },
		{ name: 'Full Stack Web Development', company: 'Lets Grow More', duration: { from: 'Mar 19, 2022', to: 'Apr 19, 2022' } },
		{ name: '', company: '', duration: '' }
	])

	return (
		<>
			<InternshipContext.Provider value={{ internships }}>
				{props.children}
			</InternshipContext.Provider>
		</>
	)
}

export default InternshipState