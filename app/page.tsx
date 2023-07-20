import Footer from './components/footer/Footer';
import Carousel from './components/header/carousel/Carousel';
import Header from './components/header/Header';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';

export default function Home() {
	return (
		<main>
			<ToasterProvider/>
			<Navbar />
			<Header />
			<LoginModal/>
			<RegisterModal/>
			<Footer />
		</main>
	);
}
