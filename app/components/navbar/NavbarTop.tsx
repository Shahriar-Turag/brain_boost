'use client';

import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';

const NavbarTop = () => {
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const monthsOfYear = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const date = new Date();
	const day = daysOfWeek[date.getDay()];
	const month = monthsOfYear[date.getMonth()];
	const year = date.getFullYear();

	const hours = date.getHours() % 12 || 12;
	const minutes = date.getMinutes();
	const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';

	const formattedDate = `${day}, ${month} ${year} ${hours}:${minutes} ${amOrPm}`;

	return (
		<div className='bg-[#192335] text-slate-400 py-3 hidden md:hidden lg:hidden xl:block'>
			<div className='flex justify-between items-center px-[300px] '>
				<div className='flex justify-center items-center gap-5'>
					<div className='flex items-center gap-2 hover:text-white'>
						<BsInstagram />
						<p className='text-sm'>100k Followers</p>
					</div>
					<div className='flex items-center gap-2  hover:text-white'>
						<ImFacebook2 />
						<p className='text-sm'>500k Followers</p>
					</div>
					<div className='flex items-center gap-2  hover:text-white'>
						<FiPhoneCall />
						<p className='text-sm'>+880 1580635803</p>
					</div>
				</div>
				<div className='flex items-center gap-2 hover:text-white'>
					{formattedDate}
				</div>
				<div>
					<div className='flex justify-between items-center gap-3 text-[20px]'>
						<p className='hover:bg-slate-600 rounded-full p-1 hover:text-white transition delay-75'>
							<FaFacebookF />
						</p>
						<p className='hover:bg-slate-600 rounded-full p-1 hover:text-white transition delay-75'>
							<BsTwitter />
						</p>
						<p className='hover:bg-slate-600 rounded-full p-1 hover:text-white transition delay-75'>
							<GrLinkedinOption />
						</p>
						<p className='hover:bg-slate-600 rounded-full p-1 hover:text-white transition delay-75'>
							<AiOutlineInstagram />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarTop;
