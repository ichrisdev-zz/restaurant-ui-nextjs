import styles from '../../../styles/modules/Home/FooterOverlay.module.scss';

const FooterOverlay = () => (
  <div className={`${styles.app__footerOverlay}`}>
    <div className={`${styles.app__footerOverlay_black}`} />
    <div className={`${styles.app__footerOverlay_img} app__bg'`} />
  </div>
);

export default FooterOverlay;
