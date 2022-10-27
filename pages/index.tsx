import Head from 'next/head'
import Link from 'next/link'

import '../styles/modules/Home.module.scss'
import NavbarLanding from '../components/Landing/nav-landing/NavbarLanding'
import Header from '../components/Landing/header/Header'
import AboutUs from '../components/Landing/about-us/AboutUs'
import SpecialMenu from '../components/Landing/special-menu/SpecialMenu'
import Laurels from '../components/Landing/laurels/Laurels'
import Gallery from '../components/Landing/gallery/Gallery'
import FindUs from '../components/Landing/find-us/FindUs'
import Footer from '../components/Landing/footer/Footer'

export default function Home() {
  return (
    <div >
      <main>
        <h1>Ir a los repositorios</h1>
        <Link href="/repository" >Navegar </Link>
        <NavbarLanding />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </main>
    </div>
  )
}


