import {
	faArrowLeft,
	faChevronLeft,
	faChevronRight,
	faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Rating from './Rating'

const Ratings = () => {
	return (
		<>
			<div className='mb-7 px-20'>
				<div>
					<h1 className=' text-4xl mt-12 mb-8'>
						Toronto’s Top Rated Agents{' '}
					</h1>
					<span className='mb-8 text-xl font-normal text-gray-dark'>
						Clients loved working with these agents
					</span>
				</div>
				<div className='allRating mt-4 grid md:grid-cols-2 gap-5 gap-y-24'>
					<Rating />
					<Rating />
					<Rating />
					<Rating />
				</div>
				<div className='md:max-w-[30%] text-center  items-center mx-auto mt-24  flex'>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className='mr-4 '
					/>

					<button className='border border-gray px-2 py-0 rounded-sm mr-2 bg-main bg-opacity-25'>
						1
					</button>
					<button className='border border-gray px-2 py-0 rounded-sm mr-2'>
						2
					</button>
					<button className='border border-gray px-2 py-0 rounded-sm mr-2'>
						3
					</button>
					<span className='mr-2'>.....</span>
					<button className='border border-gray px-2 py-0 rounded-sm mr-2'>
						6
					</button>
					<button className='border border-gray px-2 py-0 rounded-sm mr-2'>
						7
					</button>

					<FontAwesomeIcon
						icon={faChevronRight}
						className='ml-4'
					/>
				</div>
			</div>
		</>
	)
}

export default Ratings
