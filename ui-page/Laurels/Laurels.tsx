import Image from 'next/image';

import SubHeading from '../../components/Landing/Footer/SubHeading';
import { laurels } from '../../constants/images';
import data from '../../constants/data';
// import './Laurels.scss';

const AwardCard = ({ award: { imgUrl, title, subtitle } }: any) => (
  <div className="app__laurels_awards-card">
    <Image src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image src={laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
