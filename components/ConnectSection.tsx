import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ConnectSection = () => {
	return (
		<section className=' bg-black p-6  grid md:grid-cols-2'>
			<div className=' text-gray-light max-w-[541px] mx-auto'>
				<h1 className=' text-3xl mt-4 mb-4'>
					Connect with an expert local agent
				</h1>
				<span>
					Our agents are here to help you. Let’s make your home search
					or sale easier.
				</span>
			</div>
			<div>
				<div className=' md:w-[70%] h-[55px] flex border border-gray-light my-auto md:mt-6 mt-4 md:mb-0 mb-4 rounded-md'>
					<input
						type='text'
						placeholder='Search by name or location'
						className='bg-transparent border-none w-full h-full p-5 outline-none z-50'
					/>
					<button className='bg-main rounded-r-md text-2xl px-5 py-3 '>
						<FontAwesomeIcon
							icon={faSearch}
							className=''
						/>
					</button>
				</div>
			</div>
		</section>
	)
}

export default ConnectSection
