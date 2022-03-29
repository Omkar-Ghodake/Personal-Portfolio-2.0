import React, { useContext } from 'react';
import ContactInfoContext from '../../context/contactInfo/ContactInfoContext';

const ContactItems = () => {

	const contextContactInfo = useContext(ContactInfoContext);
	const { contactInfo } = contextContactInfo;

	return (
		<>
			<div className="row">
				{
					contactInfo.map((info) => {
						return <div key={info.icon} className="col-lg-4 col-md-6 mb-3 text-center" style={{ height: '10rem' }}>
							<a href={info.mailId ? `mailto:${info.mailId}` : info.url} target={info.url && '_blank'}>
								<div className="card info-card border-12 card-shadow-hover h-100">
									<div className="card-body">
										<i className={`${info.icon} fs-4 tertiary-anchor`}></i>
										<h4 className='tertiary-anchor'>{info.name}</h4>
										<p className='h-50 my-auto d-flex justify-content-center align-items-center'>{info.title}</p>
									</div>
								</div>
							</a>
						</div>
					})
				}
			</div>
		</>
	)
}

export default ContactItems