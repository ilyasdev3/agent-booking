import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const AgentChat = () => {
	return (
		<div className='bg-slate-100 '>
			<section className=' max-w-[90%] mx-auto md:grid grid-cols-2'>
				<header className='p-4 md:pr-[100px] mt-10'>
					<span className='text-main  '>CHAT WITH AN AGENT</span>
					<h1 className=' text-3xl mt-4 mb-4'>
						Real Time Conversation
					</h1>
					<span className=' mb-3 leading-7'>
						You should choose an agent you are comfortable working
						with and who you feel has your best interests at heart.
						you should be able to get your best agent by considering
						the following simple steps:
					</span>
					<div className='mt-8'>
						<div>
							<input
								className='mr-2 mt-3'
								type='checkbox'
								name=''
								id=''
							/>
							<span>Search for an agent by name or location</span>
						</div>
						<div>
							<input
								className='mr-2 mt-3 '
								type='checkbox'
								name=''
								id=''
							/>
							<span>Search for an agent by name or location</span>
						</div>
						<div className=''>
							<input
								className='mr-2 mt-3'
								type='checkbox'
								name=''
								id=''
							/>
							<span>
								Select and contact your best match agent
							</span>
						</div>
					</div>
					<button className='mt-8 bg-main text-gray-light px-3 py-2 rounded-[5px]'>
						<FontAwesomeIcon
							icon={faSearch}
							className='mr-2'
						/>
						Find An Agent
					</button>
				</header>

				<main className='mt-5'>
					<Image
						className=''
						src='/images/chat.png'
						height='540px'
						width='500px'
					/>
				</main>
			</section>
		</div>
	)
}

export default AgentChat
