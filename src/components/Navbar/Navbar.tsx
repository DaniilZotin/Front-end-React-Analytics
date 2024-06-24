import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import './Navbar.css';

const Navbar: React.FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeMenuOnMobile = () => {
		if (window.innerWidth <= 1150) {
			setShowMenu(false)
		}
	}

	return (
		<header className='header'>
			<nav className='nav container'>
				<NavLink to='/' className='nav__logo'>
					Advert
				</NavLink>

				<div
					className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
					id='nav-menu'
				>
					<ul className='nav__list'>
						<li className='nav__item'>
							<NavLink
								to='/home'
								className='nav__link'
								onClick={closeMenuOnMobile}
							>
								Home
							</NavLink>
						</li>
						<li className='nav__item'>
							<NavLink
								to='/dashboard'
								className='nav__link'
								onClick={closeMenuOnMobile}
							>
								Dashboards
							</NavLink>
						</li>
						<li className='nav__item'>
							<NavLink
								to='/about'
								className='nav__link'
								onClick={closeMenuOnMobile}
							>
								About
							</NavLink>
						</li>
					</ul>
					<div className='nav__close' id='nav-close' onClick={toggleMenu}>
						<IoClose />
					</div>
				</div>

				<div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
					<IoMenu />
				</div>
			</nav>
		</header>
	)
}

export default Navbar;
