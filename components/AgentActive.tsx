import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Rating from './Rating'

const AgentActive = () => {
	return (
		<>
			<div className='mb-7 px-20'>
				<div className='mt-7'>
					<h1 className=' text-4xl mt-12 mb-7'>
						Toronto’s Most Active Agents
					</h1>
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
						className='mr-4'
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

export default AgentActive
