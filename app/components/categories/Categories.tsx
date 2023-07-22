import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';

const Categories = () => {
	const data = [
		{
			id: 1,
			title: 'Web Design',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/web-design.png',
			course_amount: 25,
			icon: <BsArrowRightShort />,
		},
		{
			id: 2,
			title: 'Graphic Design',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/design.png',
			course_amount: 30,
			icon: <BsArrowRightShort />,
		},
		{
			id: 3,
			title: 'Personal Development',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/personal.png',
			course_amount: 20,
			icon: <BsArrowRightShort />,
		},
		{
			id: 4,
			title: 'IT & Software',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/server.png',
			course_amount: 20,
			icon: <BsArrowRightShort />,
		},
		{
			id: 5,
			title: 'Sales Marketing',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/pantone.png',
			course_amount: 20,
			icon: <BsArrowRightShort />,
		},
		{
			id: 6,
			title: 'Art and Humanities',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/paint-palette.png',
			course_amount: 20,
			icon: <BsArrowRightShort />,
		},
		{
			id: 7,
			title: 'Mobile Application',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/smartphone.png',
			course_amount: 25,
			icon: <BsArrowRightShort />,
		},
		{
			id: 8,
			title: 'Finance and accounting',
			image: 'https://rainbowit.net/html/histudy/assets/images/category/infographic.png',
			course_amount: 25,
			icon: <BsArrowRightShort />,
		},
	];
	return (
		<div className='flex flex-col justify-center items-center my-20'>
			<div className='bg-blue-200/70 text-blue-600 font-bold rounded-full px-4 py-2'>
				CATEGORIES
			</div>
			<div className='text-6xl font-extrabold text-center my-5'>
				{' '}
				Explore Top Courses Caterories <br /> That Change Yourself
			</div>

			{/* categories block */}
			<div className='grid grid-cols-4 gap-8 my-5'>
				{data.map((item) => (
					<div
						key={item.id}
						className='rounded-lg shadow-lg w-[300px] h-[250px] flex justify-between items-center flex-col gap-2 px-5 py-10 transform origin-top hover:-translate-y-2 transition duration-300'
					>
						<div className=''>
							<Image
								src={item.image}
								alt='image'
								width={80}
								height={80}
							/>
						</div>
						<div className='font-bold text-xl'>{item.title}</div>
						<div className='font-medium flex items-center gap-2 hover:text-blue-600'>
							{item.course_amount} courses
							{item.icon}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
