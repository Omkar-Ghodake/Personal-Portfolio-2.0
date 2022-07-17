import React from 'react'
import iphoneSpinner from './images/iphoneSpinner.gif'
import './css/loader.css'

const Loader = () => {
	return (
		<div className='Loader'>
			<img className='iphoneSpinner' src={iphoneSpinner} alt="Loading..." />
		</div>
	)
}

export default Loader