import React from 'react';
import FooterOverlay from '../../../components/Landing/footer-overlay/FooterOverlay'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'


/* import './Footer.css'; */
import images from '../../../constants/images';
import Image from 'next/image';


const Footer = () => (
  <div className='app__footer section__padding'>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contacto</h1>
        <p className='p__opensans'>Vicuña Mackenna 4917, San Joaquín</p>
        <p className='p__opensans'>+56 9 99989992</p>
        <p className='p__opensans'>+56 9 2999</p>

      </div>
      <div className='app__footer-links_logo'>
        <Image src={images.gericht} alt="footer" />
        <p className='p__opensans'>"La mejor manera de comer"</p>
        <img src={images.spoon} className="spoon_img" style={{ marginTop: '15' }}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horarios de trabajo</h1>
        <p className='p__opensans'>Lunes - Viernes</p>
        <p className='p__opensans'>10:00 AM - 22:00 PM</p>
        <p className='p__opensans'>Sabados - Domingos</p>
        <p className='p__opensans'>11:00 AM - 19:00 PM</p>


      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 - Siglo 21. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;
