import React from 'react';
import BgWithImg from './components/bgWithImg';
import GradiantBg from './components/gradientBg';
import DashboardContainer from './components/dashboardContainer';
import getCurrentUser from '../actions/getCurrentUser';

type Props = {};

export default async function Dashboard({}: Props) {
	const currentUser = await getCurrentUser();

	console.log(currentUser);
	return (
		<div>
			<div className='relative'>
				{/* top bg */}
				<div className=''>
					<GradiantBg />
				</div>
				{/* abs bg with image */}
				<div className='absolute left-0 right-0 bottom-[-180px]'>
					<BgWithImg currentUser={currentUser} />
				</div>
			</div>

			{/* dashboard */}
			{/* adjust the margin for relative and absolute styles */}
			<div className='mt-52 px-40'>
				<DashboardContainer />
			</div>
		</div>
	);
}
