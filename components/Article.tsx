import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Article = () => {
	return (
		<article className='max-w-[400px]'>
			<header>
				<div className='dateSection flex justify-between mb-3 text-gray'>
					<span>
						{' '}
						<FontAwesomeIcon
							icon={faCalendar}
							className='mr-2'
						/>
						MARCH 21, 2022
					</span>
					<span>
						{' '}
						<FontAwesomeIcon
							icon={faBook}
							className='mr-2'
						/>
						5 MIN READ
					</span>
				</div>
				<div>
					<Image
						src='/images/property.png'
						width='400'
						height='350'
					/>
				</div>
			</header>
			<main>
				<div className=''>
					<h2 className='text-2xl'>
						How to get multiple offers on your home
					</h2>
				</div>
				<div className='flex justify-between mt-4'>
					<div className='flex'>
						<Image
							className='rounded-full'
							src='/images/property.png'
							width='30'
							height='30'
						/>
						<h3 className='ml-2'>tim hortons</h3>
					</div>
					<div className='text-gray'>
						<span>
							{' '}
							<FontAwesomeIcon
								icon={faBook}
								className='mr-2'
							/>
							BUYING
						</span>
					</div>
				</div>
			</main>
		</article>
	)
}

export default Article
