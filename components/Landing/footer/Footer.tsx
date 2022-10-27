import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'


/* import './Footer.css'; */
import images from '../../../constants/images';
import Image from 'next/image';
import styles from '../../../styles/modules/Home/Footer.module.scss'

const Footer = () => (
  <div className={`${styles.app__footer} section__padding'`}>

    <div className={`${styles.app__footer_links}`}>
      <div className={`${styles.app__footer_links_contact}`}>
        <h1 className={`${styles.app__footer_headtext}`}>Contacto</h1>
        <p className={'p__opensans'}>Vicuña Mackenna 4917, San Joaquín</p>
        <p className={`${styles.p__opensans}`}>+56 9 99989992</p>
        <p className={`${styles.p__opensans}`}>+56 9 2999</p>

      </div>
      <div className='app__footer_links_logo'>
        <Image src={images.gericht} alt="footer" />
        <p className='p__opensans'>La mejor manera de comer</p>
        <Image src={images.spoon} alt='image' className="spoon_img" style={{ marginTop: '15' }} />
        <div className='app__footer_links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

        </div>
      </div>
      <div className='app__footer_links_work'>
        <h1 className='app__footer_headtext'>Horarios de trabajo</h1>
        <p className='p__opensans'>Lunes _ Viernes</p>
        <p className='p__opensans'>10:00 AM _ 22:00 PM</p>
        <p className='p__opensans'>Sabados _ Domingos</p>
        <p className='p__opensans'>11:00 AM _ 19:00 PM</p>


      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 _ Siglo 21. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;
