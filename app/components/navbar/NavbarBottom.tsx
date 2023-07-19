'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/images/logo.svg';
import {
	BiBookmark,
	BiBookOpen,
	BiCategory,
	BiHistory,
	BiHome,
	BiLike,
	BiLogOut,
	BiMenu,
	BiMessageSquare,
	BiSearch,
	BiShoppingBag,
	BiStar,
} from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import './NavbarBottom.scss';
import { FiUser } from 'react-icons/fi';
import profile from '@/public/assets/images/sampleProfile.jpg';
import { AiOutlineSetting } from 'react-icons/ai';

import { IoIosClose } from 'react-icons/io';
import LoginModal from '../modals/LoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
const NavbarBottom = () => {
	const registerModal = useRegisterModal();
	const [searchOpen, setSearchOpen] = React.useState(false);
	const [search, setSearch] = React.useState('');
	const handleCloseDrawer = () => {
		const drawer = document.getElementById('my-drawer-4');
		drawer?.click();
	};

	return (
		<div className=''>
			<div className='navbar bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Courses</a>
								<ul className='p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Dashboard</a>
								<ul className='p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Blog</a>
							</li>
							<li>
								<a>Contact us</a>
							</li>
						</ul>
					</div>
					<Image
						className='cursor-pointer'
						src={logo}
						alt='logo'
						width={200}
						height={200}
					/>
					<div className='lg:flex items-center gap-1 bg-slate-200/70 hover:bg-slate-300 rounded-full px-5 py-3 font-semibold cursor-pointer hidden '>
						<BiCategory />
						<a className=''>Category</a>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 text-base'>
						<li>
							<a>Home</a>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>Courses</summary>
								<ul className='p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>Dashboard</summary>
								<ul className='p-2'>
									<li>
										<a>Instructor Dashboard</a>
									</li>
									<li>
										<a>Student dashboard</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Blog</a>
						</li>
						<li>
							<a>Contact us</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end flex items-center'>
					<div className='flex items-center text-center gap-2'>
						<div
							className={
								searchOpen
									? 'search__container open'
									: 'search__container'
							}
						>
							<div className='search__input'>
								<input
									type='text'
									placeholder='Search anything...'
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>

							<div
								className='search__icon'
								onClick={() => {
									if (search) {
										console.log('searching...');
									} else {
										setSearchOpen(!searchOpen);
									}
								}}
							>
								<IoSearchOutline className='icon' />
							</div>
						</div>
						<div>
							<div className='border-r-2 pr-5 mr-5'>
								<div className='drawer drawer-end'>
									<input
										id='my-drawer-4'
										type='checkbox'
										className='drawer-toggle'
									/>
									<div className='drawer-content'>
										{/* Page content here */}
										<label htmlFor='my-drawer-4'>
											<div className='indicator'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-5 w-5 text-[#2e2ab6]'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
													/>
												</svg>
												<span className='badge badge-sm indicator-item bg-purple-700 text-white font-bold'>
													8
												</span>
											</div>
										</label>
									</div>
									<div className='drawer-side z-[10000]'>
										<label
											htmlFor='my-drawer-4 '
											className='drawer-overlay'
										></label>

										<ul className='menu p-4 w-[660px] h-full bg-white text-base-content'>
											{/* close button */}
											<div className='flex justify-between items-center'>
												<h1 className='text-2xl font-semibold'>
													Your shopping cart
												</h1>

												<div
													onClick={() => {
														handleCloseDrawer();
													}}
												>
													<IoIosClose
														size={40}
														className='hover:bg-slate-200 rounded-full transition-all duration-500'
													/>
												</div>
											</div>
											{/* Sidebar content here */}
											<li>
												<a>Sidebar Item 1</a>
											</li>
											<li>
												<a>Sidebar Item 2</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='dropdown dropdown-hover mr-4'>
							<div className='flex items-center gap-3 font-bold'>
								<FiUser className='w-8 h-8 text-[#2e2ab6] bg-slate-200 rounded-full p-1' />
								<label tabIndex={0} className=''>
									<BiMenu size={28} />
								</label>
							</div>
							<div></div>
							<ul
								tabIndex={0}
								className='dropdown-content z-[1] menu p-6 shadow-lg bg-base-100 rounded-box w-[300px] right-1'
							>
								<div className='flex items-center gap-8 mb-5'>
									<div className='avatar'>
										<div className='w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
											<Image src={profile} alt='avatar' />
										</div>
									</div>
									<div className='text-left'>
										<h2 className='text-2xl font-extrabold'>
											Name
										</h2>
										<p className='text-[#2e2ab6] font-bold underline cursor-pointer'>
											View profile
										</p>
									</div>
								</div>
								<hr className='my-2' />
								<li>
									<div>
										<BiHome size={20} />
										<a>My dashboard</a>
									</div>
								</li>
								<li>
									<div>
										<BiBookmark size={20} />
										<a>Bookmark</a>
									</div>
								</li>
								<li>
									<div>
										<BiShoppingBag size={20} />
										<a>Enrolled courses</a>
									</div>
								</li>
								<li>
									<div>
										<BiLike size={20} />
										<a>Wishlist</a>
									</div>
								</li>
								<li>
									<div>
										<BiStar size={20} />
										<a>Reviews</a>
									</div>
								</li>
								<li>
									<div>
										<BiMenu size={20} />
										<a>My quiz attempts</a>
									</div>
								</li>
								<li>
									<div>
										<BiHistory size={20} />
										<a>My order history</a>
									</div>
								</li>
								<li>
									<div>
										<BiMessageSquare size={20} />
										<a>Question and answer</a>
									</div>
								</li>
								<hr className='my-2' />
								<li>
									<div>
										<BiBookOpen size={20} />
										<a>Getting started</a>
									</div>
								</li>
								<hr className='my-2' />
								<li>
									<div>
										<AiOutlineSetting size={20} />
										<a>settings</a>
									</div>
								</li>
								<li>
									<div>
										<BiLogOut size={20} />
										<a>Login</a>
									</div>
								</li>
								<li>
									<div onClick={registerModal.onOpen}>
										<BiLogOut size={20} />
										<a>Sign Up</a>
									</div>
								</li>
							</ul>
						</div>
						<div className=''>
							<button className='px-4 py-2 text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:shadow-md transform origin-top hover:-translate-y-2 transition duration-300'>
								Enroll now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarBottom;
