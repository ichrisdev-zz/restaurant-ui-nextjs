import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import styles from '../../../styles/modules/Home/NavbarLanding.module.scss';
import images from '../../../constants/images';
import Link from 'next/link';
import Image from 'next/image';
const NavbarLanding = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`${styles.app__navbar}`}>
      <div className={`${styles.app__navbar_logo}`}>
        <Image src={images.gericht} alt="Web logo" />
      </div>
      <div>
        <ul className={`${styles.app__navbar_links}`}>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#prod">Productos</a></li>
          <li className='p__opensans'><a href="#tragos">Tragos</a></li>
          <li className='p__opensans'><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      <div className={`${styles.app__navbar_login}`}>
        <Link href='/auth/login' legacyBehavior>
          <a className='p__opensans'>Log In / Register </a>
        </Link>


      </div>
      <div className={`${styles.app__navbar_smallscreen}`}>

        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />


        {toggleMenu && (
          <div className='app__navbar_smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className={`${styles.app__navbar_smallscreen_links}`}>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#prod">Productos</a></li>
              <li className='p__opensans'><a href="#tragos">Tragos</a></li>
              <li className='p__opensans'><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default NavbarLanding;
