import Image from 'next/image';
import { title } from 'process';
import React from 'react';

import images from '../../../constants/images';

const SubHeading = () => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>Los buenos ingredientes son</p>
    <Image src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
