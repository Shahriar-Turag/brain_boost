import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import './Header.scss';
import headerImg from '../../../public/assets/images/header-image.png';
import Carousel from './carousel/Carousel';

const Header = () => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between lg:px-28 px-5'>
			<div className='content'>
				<h2 className='text-3xl lg:text-5xl font-semibold'>
					Build The Skills <br />
					To Drive Your Career.{' '}
				</h2>

				<p className='text-slate-500'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</p>
				<button className='flex items-center justify-between gap-1 text-white bg-gradient-to-r from-blue-700 to-[#c869ee]  rounded-xl p-4 transform origin-top hover:-translate-y-2 transition duration-300 mt-10'>
					View courses{' '}
					<span>
						<BsArrowRightShort size={20} />
					</span>
				</button>
			</div>
			<div className='z-0 relative hidden lg:block'>
				<Image
					className='absolute top-[-245px]'
					src={headerImg}
					alt='header image'
				/>
			</div>

			<Carousel />
		</section>
	);
};

export default Header;
