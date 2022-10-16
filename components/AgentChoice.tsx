import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const AgentChoice = () => {
	return (
		<div className='bg-slate-100 '>
			<section className=' max-w-[90%] mx-auto  md:grid grid-cols-2'>
				<header className='mt-0 top-0'>
					<Image
						className=''
						src='/images/rectangle.png'
						height='414px'
						width='414px'
					/>
				</header>
				<main className='p-4 md:pr-[100px]'>
					<span className='text-main  '>CHOOSING YOUR AGENT</span>
					<h1 className=' text-3xl mt-4 mb-4'>
						How to choose your agent
					</h1>
					<span className=' leading-7'>
						You should choose an agent you are comfortable working
						with and who you feel has your best interests at heart.
						In order to make a decision, try asking prospective
						agents the following:
					</span>
					<div className='mt-4'>
						<div>
							<input
								className='mr-2'
								type='checkbox'
								name=''
								id=''
							/>
							<span>
								How and where your property will be advertised
							</span>
						</div>
						<div>
							<input
								className='mr-2'
								type='checkbox'
								name=''
								id=''
							/>
							<span>
								Ask to see examples of their success in selling
								properties like yours
							</span>
						</div>
						<div className=''>
							<input
								className='mr-2'
								type='checkbox'
								name=''
								id=''
							/>
							<span>
								How often you can expect feedback from the agent
								while your property
							</span>
						</div>
					</div>
					<button className='mt-4 bg-main text-gray-light px-3 py-2 rounded-[5px]'>
						<FontAwesomeIcon
							icon={faSearch}
							className='mr-2'
						/>
						Find An Agent
					</button>
				</main>
			</section>
		</div>
	)
}

export default AgentChoice
