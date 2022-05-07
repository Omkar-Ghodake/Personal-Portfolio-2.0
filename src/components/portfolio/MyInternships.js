import React, { useContext } from 'react';
import InternshipContext from '../../context/internships/InternshipContext';

const MyInternships = () => {

	const contextInternship = useContext(InternshipContext)
	const { internships } = contextInternship

	let serial = 0
	const createSerialNum = () => {
		return ++serial
	}

	return (
		<>
			<div className="my-skills mb-4">
				<p className='text-center sub-heading'>MY <span className="change-color-tertiary m-0">INTERNSHIPS</span></p>
			</div>
			<table className={`table card-shadow table-borderless table-hover`}>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Internship</th>
						<th scope="col">Company</th>
						<th scope="col">Duration</th>
					</tr>
				</thead>
				<tbody>
					{
						internships.map((internship) => {
							return <tr key={internship.company}>
								<th scope="row">{createSerialNum()}</th>
								<td>{internship.name === '' ? '_____' : internship.name}</td>
								<td>{internship.company === '' ? '_____' : internship.company}</td>
								<td>{internship.duration === '' ? '_____' : internship.duration.from + '-' + internship.duration.to}</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</>
	)
}

export default MyInternships