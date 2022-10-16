import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeroNavbar = () => {
	return (
		<div className='text-gray-light text-center mt-7'>
			<div className='z-10 max-w-[857px] mx-auto text-center items-center '>
				<h1 className=' text-5xl font-bold mb-4   '>
					Find The Perfect Real Estate Agent
				</h1>
				<span className=' text-xl'>
					Make your search and sale easier and faster by connecting
					with one of our expert local agent in your neighborhood
				</span>
			</div>
			<div className='max-w-[1061px] mx-auto relative'>
				<FontAwesomeIcon
					icon={faSearch}
					className=' text-gray w-[19px] absolute top-1/2 left-5 '
				/>
				<input
					type='text'
					className='h-[86px] w-full rounded-md mt-6'
				/>
				<button
					className=' bg-main 
w-[179px] h-[60px] rounded-md p-[5px, 20px, 25px, 20px] absolute right-5 bottom-[13px] '>
					Search Agents
				</button>
			</div>
		</div>
	)
}

export default HeroNavbar
