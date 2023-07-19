'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import './Carousel.scss';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { CardData } from './CardData';
import Image from 'next/image';
import { BiBookAlt } from 'react-icons/bi';
import { FiArrowRight, FiUsers } from 'react-icons/fi';

console.log(CardData);
const Carousel = () => {
	return (
		<div className='relative h-full z-0'>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className='swiper'
			>
				{CardData.map((card) => (
					<SwiperSlide className='swiper-slide' key={card.id}>
						<div className='card'>
							<div className='card__image'>
								<Image
									className='rounded-lg'
									src={card.img}
									alt={card.title}
									width={400}
									height={400}
								/>
							</div>
							<div className='card__content'>
								<div className='lesson__info'>
									<h3>
										<BiBookAlt /> {card.lessons} lessons
									</h3>
									<h3>
										{' '}
										<FiUsers /> {card.students} students
									</h3>
								</div>
								<div className='title'>
									<h1>{card.title}</h1>
									<p className='description'>
										{' '}
										{card.description}
									</p>
								</div>
								<div className='ratings'>
									<div className='rating rating-sm rating-half'>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-1'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-2'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-1'
											checked
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-2'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-1'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-2'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-1'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-2'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-1'
										/>
										<input
											type='radio'
											name='rating-10'
											className='bg-yellow-400 mask mask-star-2 mask-half-2'
										/>
									</div>
									<span>({card.reviewCount} Reviews)</span>
								</div>
								<div className='bottom'>
									<div className='price'>
										<h1>${card.price} </h1>
										<h2 className='oldPrice'>
											${card.oldPrice}
										</h2>
									</div>
									<button>
										Learn more <FiArrowRight />
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
