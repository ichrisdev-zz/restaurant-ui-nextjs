import React from 'react';

import styles from '../../../styles/modules/Home/Header.module.scss';
import images from '../../../constants/images';
import SubHeading from '../subheading/SubHeading';
import Image from 'next/image';



const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading />
      <h1 className='app__header-h1'>La clave de buenas preparaciones</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Las mejores preparaciones con los mejores ingredientes del mercado para un excelente servicio.</p>
      <button type="button" className="custom__button">Explorar menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <Image src={images.welcome} alt="header img" />

    </div>
  </div>
);

export default Header;
