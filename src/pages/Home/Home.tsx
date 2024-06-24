import React from 'react'
import "./Home.css";
import logo from "../../img/intro/logo.png"


const Home: React.FC = () => {
	return (
		<div className='home__introduction'>
			<div className='img__intro'>
				<div className='img__logo-wrapper'>
					<img className='logo__icon' alt='Logo'  src={logo} loading='eager'/>
				</div>
				<div className='into__text'>
					<div className='title__intro'>
						<b className='number-text'>Information about project</b>
					</div>
					<div className='description'>
						<div className='this__is__project'>
							This is project was created for review analytics. On “Dashboard”
							you can choose advertisement and see diagram that provides info
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
