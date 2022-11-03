import Image from 'next/image';

import { spoon } from '../../../constants/images';

const SubHeading = ({ title }: any) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <Image src={spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
