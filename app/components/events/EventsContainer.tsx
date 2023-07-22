import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort, BsClock } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const EventsContainer = () => {
	const data = [
		{
			id: 1,
			title: 'Elegant light box paper cut dioramas in UK',
			location: 'IAC Building',
			locationIcon: <CiLocationOn />,
			time: '10:00 AM - 12:00 PM',
			timeIcon: <BsClock />,
			btnIcon: <BsArrowRightShort />,
			image: 'https://rainbowit.net/html/histudy/assets/images/event/grid-type-04.jpg',
		},
		{
			id: 2,
			title: 'Most Effective ways for Educations Problem',
			location: 'Vancouver, Canada',
			locationIcon: <CiLocationOn />,
			time: '10:00 AM - 12:00 PM',
			timeIcon: <BsClock />,
			btnIcon: <BsArrowRightShort />,
			image: 'https://rainbowit.net/html/histudy/assets/images/event/grid-type-05.jpg',
		},
		{
			id: 3,
			title: 'Painting Art contest 2023 for Brain Boost club',
			location: 'IAC Building',
			locationIcon: <CiLocationOn />,
			time: '10:00 AM - 12:00 PM',
			timeIcon: <BsClock />,
			btnIcon: <BsArrowRightShort />,
			image: 'https://rainbowit.net/html/histudy/assets/images/event/grid-type-02.jpg',
		},
	];
	return (
		<div className='h-[900px] w-full bg-gradient-to-r from-[#8DA8FB] to-[#B38DD5] flex flex-col justify-center items-center text-white'>
			<div className='uppercase bg-[#5f2a91] bg-opacity-25 rounded-full px-5 py-2'>
				Simulated to take part in?
			</div>
			<div className='text-6xl font-extrabold'>Upcoming Events</div>
			<div className='flex gap-10 my-10'>
				{data.map((item) => (
					<div
						key={item.id}
						className='rounded-lg shadow-lg w-[400px] h-[500px] flex flex-col gap-2 p-5 transform origin-top hover:-translate-y-2 transition duration-300 bg-white text-black'
					>
						<div className=''>
							<Image
								src={item.image}
								alt='image'
								width={400}
								height={400}
								className='rounded-lg'
							/>
							<div className='flex items-center justify-between text-sm'>
								<div className='flex items-center gap-1 my-2'>
									{item.locationIcon} {item.location}
								</div>
								<div className='flex items-center gap-1'>
									{item.timeIcon} {item.time}
								</div>
							</div>
						</div>
						<div className='font-bold text-xl'>{item.title}</div>
						<button className='font-medium flex items-center gap-2 rounded-full border border-black-1 hover:text-blue-600 w-[130px] py-2 px-2 text-center'>
							Get ticket {item.btnIcon}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventsContainer;
