import Image from 'next/image';

import images from '../../../constants/images';
import styles from '../../../styles/modules/Home/AboutUs.module.scss';

const AboutUs = () => (
  <div className={`${styles.app__aboutus} app__bg flex__center section__padding`} id='about'>
    <div className={`${styles.app__aboutus_overlay} flex__center`}>
      <Image src={images.G} alt="21" id="21" />
    </div>

    <div className={`${styles.app__aboutus_content} flex__center`}>
      <div className={`${styles.app__aboutus_content_about}`}>
        <h1 className='headtext__cormorant'>Conocenos</h1>
        <Image src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Apasionados por la gastronomia y entregar servicios de calidad.</p>
        <button type='button' className='custom__button'>Leer más</button>
      </div>

      <div className={`${styles.app__aboutus_content_knife} flex__center`}>
        <Image src={images.knife} alt="knife" />
      </div>

      <div className={`${styles.app__aboutus_content_history}`}>
        <h1 className='headtext__cormorant'>Historia</h1>
        <Image src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Ristorante fondato nel XX secolo.</p>
        <button type='button' className='custom__button'>Leer más</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
