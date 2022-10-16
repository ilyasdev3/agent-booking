import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBars,
	faClose,
	faFlag,
	faFlagUsa,
	faHome,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className='navbar  flex justify-between  w-full p-6'>
			<div className='brandName '>
				<h1 className=' text-3xl '>
					<FontAwesomeIcon
						icon={faHome}
						className='bg-none '
					/>
					Agent
					<span className='text-main text-3xl font-bold'>Book</span>
				</h1>
			</div>
			<div className='flex justify-between'>
				<div className='border items-center text-center mr-6 px-4 py-0'>
					<FontAwesomeIcon
						icon={faFlagUsa}
						className='w-5 text-3xl mt-2 text-main'
					/>
				</div>
				<div className=' w-42 items-center h-12 border mr-6 px-4 py-0 flex justify-between '>
					<FontAwesomeIcon
						icon={faBars}
						className='w-5 text-3xl mr-5'
					/>
					<Image
						className='rounded-full border-b-gray-light border-spacing-5 py-4 '
						src='/images/asian-couple-sign-home-contract-and-handshake-with-2021-12-09-07-18-12-utc1.png'
						width={25}
						height={30}
					/>
				</div>
			</div>
		</div>
	)
}

export default Navbar
