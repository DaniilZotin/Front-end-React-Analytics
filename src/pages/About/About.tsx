import React from 'react'
import './About.css'
import logo from '../../img/intro/logo-about.png'

const About: React.FC = () => {
	return (
		<div className='home__introduction'>
			<div className='img__intro'>
				<div className='img__logo-wrapper'>
					<img className='logo__icon' alt='Logo' src={logo} loading='eager' />
				</div>
				<div className='into__text'>
					<div className='title__intro'>
						<b className='number-text'>About</b>
					</div>
					<div className='description'>
						<div className='this__is__project'>
							This project was developed as test task, main technologies are:<br>
                            </br>1. Spring(java)<br></br>2. React(typescript) 
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
