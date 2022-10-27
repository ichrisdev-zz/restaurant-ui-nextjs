import Image from 'next/image';
import images from '../../../constants/images';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>Contacto</p>
        <Image src={images.spoon} alt="spoon" className='spoon__img' />
      </div>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Vicuña Mackenna 4917, San Joaquín, Región Metropolitana</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Horarios:</p>
        <p className='p__opensans'>Lun - Vie: 10:00 AM - 22:00 PM</p>
        <p className='p__opensans'>Sab - Dom: 11:00 AM - 19:00 PM</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>Visitanos</button>

    </div>

    <div className='app__wrapper_img'>
      <Image src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
