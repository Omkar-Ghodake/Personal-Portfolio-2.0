import React, { useContext } from 'react';
import StatsContext from '../../context/stats/StatsContext';

const MyStats = () => {

	const contextStats = useContext(StatsContext);
	const { stats } = contextStats;

	return (
		<>
			<div className="p-3">
				<div className="row g-3">
					{
						stats.map((stat) => {
							return <div key={stat.body} className="col-md-6">
							<div className={`card about-card border-8 card-shadow-hover`}>
								<div className="card-body">
									<p className='about-card-head'>{stat.head}<sup>{stat.sup}</sup></p>
									<p className='about-card-body'>{stat.body}</p>
								</div>
							</div>
						</div>
						})
					}
				</div>
			</div>
		</>
	)
}

export default MyStats