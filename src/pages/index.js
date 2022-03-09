import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Features from '../components/Features';
import Events from '../components/Events';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Acampamento Areté</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Navbar /> */}
			<Hero />
			<Features />
			<Testimonial />
			<Events />
			<Footer />
		</>
	);
}
