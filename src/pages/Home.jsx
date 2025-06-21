import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Herosection/Home';
import Feature1 from '../components/Features/Feature1';
import Feature2 from '../components/Features/Feature2';
import Feature3 from '../components/Features/Feature3';
const Home = () => {
  return (
    <div>
    <NavBar />
    <HeroSection />
    <Feature1 />
    <Feature2 />
    <Feature3 />
    <Footer />
    </div>
  )
}

export default Home
