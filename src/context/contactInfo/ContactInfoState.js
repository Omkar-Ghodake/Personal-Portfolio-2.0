import React, { useState } from 'react';
import ContactInfoContext from './ContactInfoContext';

const ContactInfoState = (props) => {

	const [contactInfo] = useState([
		{ icon: 'fa-solid fa-location-dot', name: 'City', title: 'Pune, Maharashtra - 411046', url: 'https://goo.gl/maps/b92Wg7PLqmLZ54MH9' },
		{ icon: 'fa-solid fa-envelope', name: 'Email', title: 'omkar.a.g.78@gmail.com', mailId: 'omkar.a.g.78@gmail.com' },
		{ icon: 'fa-brands fa-github', name: 'GitHub', title: 'Omkar-Ghodake', url: 'https://github.com/Omkar-Ghodake' },
		{ icon: 'fa-brands fa-linkedin', name: 'LinkedIn', title: 'omkar-ghodake', url: 'https://www.linkedin.com/in/omkar-ghodake/' },
		{ icon: 'fa-brands fa-twitter', name: 'Twitter', title: 'Omkar Ghodake', url: 'https://twitter.com/omkar_g_1831' },
		{ icon: 'fa-brands fa-telegram', name: 'Telegram', title: 'Omkar Ghodake', url: 'https://t.me/omkar_ghodake' },
		{ icon: 'fa-brands fa-instagram', name: 'Instagram', title: 'omkar_1831_', url: 'https://www.instagram.com/omkar_1831_/' },
		{ icon: 'fa-brands fa-facebook', name: 'Facebook', title: 'Omkar Ghodake', url: 'https://www.facebook.com/omkar.ghodake.92/' }
	]);

	return (
		<>
			<ContactInfoContext.Provider value={{ contactInfo }}>
				{props.children}
			</ContactInfoContext.Provider>
		</>
	)
}

export default ContactInfoState;