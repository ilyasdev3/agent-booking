import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import HeroNavbar from '../components/HeroNavbar'

const Header = () => {
	return (
		<div className='header'>
			<Navbar />
			<HeroNavbar />
		</div>
	)
}

export default Header
