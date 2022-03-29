import React, { useContext } from 'react';
import ImageContext from '../../context/images/ImageContext';

const MyTools = () => {

	const contextImage = useContext(ImageContext);
	const { toolImgs } = contextImage;

	return (
		<>
			<div className="my-skills mb-4">
				<p className='text-center sub-heading'>MY <span className="change-color-tertiary m-0">TOOLS</span></p>

				<div className="row">
					{
						toolImgs.map((tool) => {
							return <div key={tool.title} className="col-lg-4 col-md-6 mb-3 text-center" style={{ height: '10rem' }}>
								<a href={tool.url} target='_blank'>
									<div className="card tool-card border-8 card-shadow-hover h-100">
										<div className="card-body">
											<img className="tool-img h-50" src={tool.source} alt={(tool.title).toUpperCase()} />
											<p className='tertiary-anchor h-50 my-auto d-flex justify-content-center align-items-center'>{tool.title}</p>
										</div>
									</div>
								</a>
							</div>
						})
					}
				</div>
			</div>
		</>
	)
}

export default MyTools