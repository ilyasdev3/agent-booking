import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Rating = () => {
	return (
		<article className='rating flex mt-4'>
			<header>
				<Image
					src='/images/asian-couple-sign-home-contract-and-handshake-with-2021-12-09-07-18-12-utc1.png'
					className='rounded-[50%]'
					width={200}
					height={200}
				/>
			</header>
			<div className='flex flex-col px-5'>
				<main className='flex justify-between'>
					<h1 className=' text-2xl font-bold mb-1'>Safdar Azeem</h1>
					<div className='flex'>
						<div className=' text-yellow'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<span className='ml-3'>5.0</span>
					</div>
				</main>
				<div className='flex flex-col '>
					<span className=' space-x-5 mb-1'>
						Tim is a real estate agent at Kaleidico Realty, with
						over 8 years of experience. Lynn prides himself in
						satisfying his clients with the ...{' '}
						<button className='btn font-bold border-b-2'>
							More
						</button>
					</span>
					<div className='h-[2px] bg-slate-100 mt-2 mb-2'></div>
					<div className='relative'>
						<button className=' absolute right-0 w-fit px-3 py-2 rounded-sm flex-end  bg-main text-gray-light'>
							Contact agent
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Rating
