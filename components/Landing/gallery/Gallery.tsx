import images from '../../../constants/images';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import '../../../styles/modules/Home/Gallery.module.scss';
import Image from 'next/image';




const Gallery = () => {



  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <div style={{ marginBottom: '1rem' }}>
          <p className='p__cormorant'>Premios y Reconocimientos</p>
          <Image src={images.spoon} alt="spoon" className='spoon__img' />
        </div>
        <h1 className='headtext__cormorant'>Galeria</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>lorem ipsum galeria de imagenes de nuestras comidas favoritas del mes</p>
        <button type='button' className='custom__button'>Ver más</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container'>
          {/* comnienzo de los productos */}
        </div>

        <div className='app__gallery-images-arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' />
          <BsArrowRightShort className='gallery__arrow-icon' />

        </div>


      </div>
    </div>
  );
}

export default Gallery;
