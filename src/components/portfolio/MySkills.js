import React, { useContext } from 'react';
import ImageContext from '../../context/images/ImageContext';

const MySkills = () => {

	const contextImage = useContext(ImageContext);
	const { skillImgs } = contextImage;

	return (
		<>
			<div className="my-skills mb-4">
				<p className='text-center sub-heading'>MY <span className="change-color-tertiary m-0">SKILLS</span></p>
				<div className="row skills-card justify-content-center bg-dark border-12 justify-content-center align-items-center p-2 card-shadow">
					{
						skillImgs.map((image) => {
							return <div key={ image.title } className="col-md-6 my-2">
								<div className="row justify-content-center align-items-center">
									<div className="col-2 text-center">
										<img className='skills-image text-center bg-light rounded p-1' src={ image.source } alt="" />
									</div>
									<div className="col-3">
										<p className='m-0'>{ image.title }</p>
									</div>
									<div className="col-7">
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={ { width: (image.width + '%') } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><strong className='progress-bar-text'>{ image.width }%</strong></div>
										</div>
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

export default MySkills