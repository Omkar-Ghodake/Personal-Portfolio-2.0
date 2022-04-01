import React, { useState } from 'react';
import StatsContext from './StatsContext';

const StatsState = (props) => {

	const [stats] = useState([
		{ head: 'TE', body: 'Year Of Engineering' },
		{ head: 'IT', body: 'Branch Of Engineering' },
		{ head: '1', sup: '+', body: 'Years Of Experience' },
		{ head: '10', sup: '+', body: 'Projects Created' },
	]);

	return (
		<>
			<StatsContext.Provider value={{ stats }}>
				{props.children}
			</StatsContext.Provider>
		</>
	)
}

export default StatsState