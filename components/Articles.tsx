import { faBook, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Article from './Article'

const Articles = () => {
	return (
		<div className='p-12'>
			<h1 className=' text-3xl mt-4 mb-8'>Real Time Conversation</h1>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-4'>
				<Article />
				<Article />
				<Article />
			</div>
		</div>
	)
}

export default Articles
