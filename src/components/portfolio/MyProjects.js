import React, { useContext } from 'react';
import VideoContext from '../../context/videos/VideoContext';

const MyProjects = () => {

	const contextVideo = useContext(VideoContext);
	const { projectVdos } = contextVideo;

	return (
		<>
			<div className="my-projects mb-4">
				<p className='text-center sub-heading'>MY <span className="change-color-tertiary m-0">PORTFOLIO</span></p>

				<div className="row">
					{
						projectVdos.map((project) => {
							return <div key={project.title} className="col-lg-4 col-md-6 mb-3 text-center">
								<video className='border-8 card-shadow' src={project.source} type="video/mp4" controls width="95%"></video>
								<h6 className='mt-2'><strong>{project.title}</strong></h6>
								<div className="my-3">
									{!(project.website === '') && <a className='blue-anchor' href={project.website} target="_blank" rel="noreferrer" >
										Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
									</a>}
									<br />
									<a className='blue-anchor' href={project.githubRepo} target="_blank" rel="noreferrer" >
										GitHub Repository <i className="fa-solid fa-arrow-up-right-from-square"></i>
									</a>
								</div>

								<p>
									<button className="read-description-btn border-5" type="button" data-bs-toggle="collapse"
										data-bs-target={'#' + project.id} aria-expanded="false" aria-controls={project.id}>
										Read Description
									</button>
								</p>
								<div className="collapse" id={project.id}>
									<div className="card border-12 card-shadow-hover desc-card card-body m-auto w-100 h-auto">
										{project.desc}
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

export default MyProjects