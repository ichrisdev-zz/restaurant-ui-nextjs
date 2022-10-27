import Image from 'next/image';
import React from 'react';

import images from '../../../constants/images';
import '../../../styles/modules/Home/AboutUs.module.scss';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
       <Image src={images.G} alt="21" />
    </div>
    
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Conocenos</h1>
        <Image src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Apasionados por la gastronomia y entregar servicios de calidad.</p>
        <button type='button' className='custom__button'>Leer más</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <Image src={images.knife} alt="knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Historia</h1>
        <Image src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Ristorante fondato nel XX secolo.</p>
        <button type='button' className='custom__button'>Leer más</button>
      </div>

      
    </div>   
  </div>
);

export default AboutUs;
