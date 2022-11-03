import Navbar from "../components/Landing/Navbar/Navbar";
import AboutUs from "../ui-page/AboutUs";
import Header from "../ui-page/Header/Header";
import SpecialMenu from '../ui-page/Menu/SpecialMenu';
import Chef from '../ui-page/Chef/Chef';
import Intro from '../ui-page/Intro/Intro';
import Laurels from '../ui-page/Laurels/Laurels';
import Gallery from '../ui-page/Gallery/Gallery';
import FindUs from '../ui-page/Findus/FindUs';
import Footer from '../ui-page/Footer';


export default function Home() {
  return (
    <div >
      <main>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </main>
    </div>
  )
}


