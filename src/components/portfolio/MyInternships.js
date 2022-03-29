import React, { useContext } from 'react';
import ThemeContext from '../../context/theme/ThemeContext';

const MyInternships = () => {

	const contextTheme = useContext(ThemeContext);
	const { theme } = contextTheme;

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
					<tr>
						<th scope="row">1</th>
						<td>Full Stack Web Development</td>
						<td>Always Sahi Consultancy</td>
						<td>Feb 8, 2022 <b>-</b> Mar 8, 2022</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Full Stack Web Development</td>
						<td>TwoWaits Technologies Pvt.</td>
						<td>Mar 15, 2022 <b>-</b> Ongoing</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Full Stack Web Development</td>
						<td>Lets Grow More</td>
						<td>Mar 19, 2022 <b>-</b> Ongoing</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Full Stack Web Development</td>
						<td>The Sparks Foundation</td>
						<td>Mar 25, 2022 <b>-</b> Ongoing</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>...</td>
						<td>...</td>
						<td>...</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default MyInternships