import React from 'react';

import images from '../../../constants/images';
import data from '../../../constants/data';

import styles from '../../../styles/modules/Home/Laurels.module.scss';
import Image from 'next/image';

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>Premios y Reconocimientos</p>
        <Image src={images.spoon} alt="spoon" className='spoon__img' />
      </div>
      <h1 className='headtext__cormorant'>Nuestros Logros</h1>
      <div className={`${styles.app__laurels_awards}`}>

        {data.awards && data.awards.map(({ id, imgUrl, title, subtitle }: any) => {
          return (
            <div className={`${styles.app__laurels_awards_card}`} key={id}>
              <Image src={imgUrl} alt="award" />
              <div className={`${styles.app__laurels_awards_card_content}`}>
                <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                <p className='p__cormorant'>{subtitle}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>

    <div className='app__wrapper_img'>
      <Image src={images.laurels} alt="laurels" />
    </div>


  </div>
);

export default Laurels;
