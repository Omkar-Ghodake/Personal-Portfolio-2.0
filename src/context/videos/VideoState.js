import React, { useState } from 'react';
import VideoContext from './VideoContext';

// project videos
import personalPortfolio from '../../components/videos/personal-portfolio.mp4'
import yourNotebook from '../../components/videos/yourNotebook.mp4'
import newsMonkey from '../../components/videos/news-monkey.mp4'
import textUtils from '../../components/videos/text-utils.mp4'
import cryptoTracker from '../../components/videos/crypto-tracker.mp4'
import monkeyApi from '../../components/videos/monkey-api.mp4'

const VideoState = (props) => {

	const [projectVdos] = useState([
		{
			source: personalPortfolio,
			id: 'vdo1',
			title: 'Personal Portfolio',
			website: 'https://omkar-ghodake.github.io/ASCIP-WebDev-L02/',
			githubRepo: 'https://github.com/Omkar-Ghodake/ASCIP-WebDev-L02',
			desc: 'Responsive multi-page personal portfolio website.'
		},
		{
			source: yourNotebook,
			id: 'vdo2',
			title: 'yourNotebook',
			website: '',
			githubRepo: 'https://github.com/Omkar-Ghodake/yourNotebook',
			desc: 'yourNotebook is a MERN stack web application which provides users to create notes. At first, user have to create their account, and then they can create notes. Users also can log in back to their account and can get their notes back. Also, iNotebook provides functions for editing and deleting the notes.'
		},
		{
			source: newsMonkey,
			id: 'vdo3',
			title: 'News Monkey',
			website: '',
			githubRepo: 'https://github.com/Omkar-Ghodake/News-Monkey',
			desc: 'News-Monkey is API based news app which provides latest realtime news according to different categories.'
		},
		{
			source: textUtils,
			id: 'vdo4',
			title: 'Text Utils',
			website: '',
			githubRepo: 'https://github.com/Omkar-Ghodake/Text-Utility-using-Reactjs',
			desc: 'Text Utilities is an app which provides various utilities for your text. User can perform various operations such as convert text to lowercase or uppercase, count the number of characters and words and many more functions.'
		},
		{
			source: cryptoTracker,
			id: 'vdo5',
			title: 'Crypto Tracker',
			website: '',
			githubRepo: 'https://github.com/Omkar-Ghodake/Crypto-Tracker',
			desc: 'An API based web application which provides live crypto currencies data (using axios - react.js).'
		},
		{
			source: monkeyApi,
			id: 'vdo6',
			title: 'Monkey Api',
			website: 'https://omkar-ghodake.github.io/ASCIP-WebDev-L03/',
			githubRepo: 'https://github.com/Omkar-Ghodake/ASCIP-WebDev-L03',
			desc: 'A website which fetches data from an API using fetch API in React.js.'
		}
	]);

	return (
		<>
			<VideoContext.Provider value={{ projectVdos }}>
				{props.children}
			</VideoContext.Provider>
		</>
	)
}

export default VideoState