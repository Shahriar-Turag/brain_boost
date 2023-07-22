import NavbarBottom from '../components/navbar/NavbarBottom';
import NavbarTop from '../components/navbar/NavbarTop';
// import "../";
import { Inter } from 'next/font/google';
import getCurrentUser from '../actions/getCurrentUser';
import Footer from '../components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Brain Boost',
	description: 'Boost your academic performance with Brain Boost',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavbarTop />
				<NavbarBottom currentUser={currentUser} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
