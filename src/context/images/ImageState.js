import React, { useState } from 'react';
import ImageContext from './ImageContext';

// skills images
import html from '../../components/images/html5.svg';
import css from '../../components/images/css3.svg';
import bootstrap from '../../components/images/bootstrap5.svg';
import sass from '../../components/images/sass.svg';
import js from '../../components/images/javascript.svg';
import reactjs from '../../components/images/reactjs.svg';
import nodejs from '../../components/images/nodejs.svg';
import express from '../../components/images/express.svg';
import mongodb from '../../components/images/mongodb.svg';
import mongoose from '../../components/images/mongoose.svg';
import pug from '../../components/images/pug.svg';
import python from '../../components/images/python3.svg';
import cpp from '../../components/images/cpp.svg';
import java from '../../components/images/java.svg';

// tools images
import vsCode from '../../components/images/vscode.svg';
import eclipse from '../../components/images/eclipse.svg';
import pycharm from '../../components/images/pycharm.jpg';
import codeblocks from '../../components/images/codeblocks.png';
import postman from '../../components/images/postman.svg';
import adobeExpress from '../../components/images/adobeExpress.png';
import fa from '../../components/images/fontawesome.png';

const ImageState = (props) => {

	// skills images 
	const [skillImgs] = useState([
		{ source: html, title: 'HTML', width: 97 },
		{ source: css, title: 'CSS', width: 90 },
		{ source: bootstrap, title: 'Bootstrap', width: 85 },
		{ source: sass, title: 'SASS', width: 80 },
		{ source: js, title: 'JavaScript', width: 80 },
		{ source: reactjs, title: 'React.js', width: 70 },
		{ source: nodejs, title: 'NodeJs', width: 70 },
		{ source: express, title: 'Express', width: 70 },
		{ source: mongodb, title: 'MongoDB', width: 70 },
		{ source: mongoose, title: 'Mongoose', width: 70 },
		{ source: pug, title: 'Pug', width: 50 },
		{ source: python, title: 'Python', width: 50 },
		{ source: cpp, title: 'C++', width: 50 },
		{ source: java, title: 'Java', width: 50 }
	]);

	// tools images
	const [toolImgs] = useState([
		{ source: vsCode, title: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
		{ source: eclipse, title: 'Eclipse', url: 'https://www.eclipse.org/' },
		{ source: pycharm, title: 'Pycharm', url: 'https://www.jetbrains.com/pycharm/' },
		{ source: codeblocks, title: 'Codeblocks', url: 'https://www.codeblocks.org/' },
		{ source: postman, title: 'Postman', url: 'https://www.postman.com/' },
		{ source: mongodb, title: 'MongoDB Compass', url: 'https://www.mongodb.com/products/compass' },
		{ source: adobeExpress, title: 'Adobe Creative Cloud Express', url: 'https://express.adobe.com/sp/' },
		{ source: fa, title: 'Font Awesome', url: 'https://fontawesome.com/' }
	]);

	return (
		<>
			<ImageContext.Provider value={{ skillImgs, toolImgs }}>
				{props.children}
			</ImageContext.Provider>
		</>
	)
}

export default ImageState