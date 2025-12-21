import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import LogoMarquee from "./ui/LogoMarque";
import ServicesBento from "./ui/Services";
import WhyChooseUs from "./ui/Why";
import ProjectShowcase from "./ui/Projects";
import TechStack from "./ui/TeachStack";
import Footer from "./ui/Footer"; 
import WhatsAppFloat from "./ui/WhatsApp";

export default async function Home(){
	return (
		<>
			<Navbar/>
			<Hero/>
			<LogoMarquee/>
			<ServicesBento/>
			<WhyChooseUs/>
			<ProjectShowcase/>
			<TechStack/>
			<Footer/>
			<WhatsAppFloat/>
		</>
	)
}