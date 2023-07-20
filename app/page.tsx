import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import TeacherRegModal from './components/modals/TeacherRegModal';
import NavbarBottom from './components/navbar/NavbarBottom';
import NavbarTop from './components/navbar/NavbarTop';
import ToasterProvider from './providers/ToasterProvider';

export default async function Home() {
	const currentUser = await getCurrentUser();

	// console.log(currentUser);
	return (
		<main>
			<ToasterProvider />
			<NavbarTop />
			<NavbarBottom currentUser={currentUser} />
			<Header />
			<LoginModal />
			<RegisterModal />
			<TeacherRegModal />
			<Footer />
		</main>
	);
}
