import images from '../../../constants/images';
import data from '../../../constants/data';
import styles from '../../../styles/modules/Home/SpecialMenu.module.scss';
import Image from 'next/image';


const SpecialMenu = () => (
  <div className={`${styles.app__specialMenu} flex__center section__padding`} id="menu">
    <div className={`${styles.app__specialMenu_title}`}>
      <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>Tragos que se ajustan a su paladar</p>
        <Image src={images.spoon} alt="spoon" className='spoon__img' />
      </div>
      <h1 className='headtext__cormorant'>Especiales de Hoy</h1>
    </div>

    <div className={`${styles.app__specialMenu_menu}`}>
      <div className={`${styles.app__specialMenu_menu_wine} flex__center`}>
        <p className={`${styles.app__specialMenu_menu_heading}`}>Vinos y Cerveza</p>
        <div className={`${styles.app__specialMenu_menu_items}`}>
          {data.wines && data.wines.map(({ id, title, price, tags }: any) => {
            return (
              <div className={`${styles.app__menuitem}`} key={id}>
                <div className={`${styles.app__menuitem_head}`}>
                  <div className={`${styles.app__menuitem_name}`}>
                    <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                  </div>

                  <div className={`${styles.app__menuitem_dash}`} />

                  <div className={`${styles.app__menuitem_price}`}>
                    <p className='p__cormorant'>{price}</p>
                  </div>
                </div>

                <div className={`${styles.app__menuitem_sub}`}>
                  <p className='p__opensans' style={{ color: '#AAA' }}>{tags}</p>
                </div>

              </div>
            )
          })
          }
        </div>
      </div>

      <div className={`${styles.app__specialMenu_menu_img}`}>
        <Image src={images.menu} alt="menu img" />
      </div>

      <div className={`${styles.app__specialMenu_menu_cocktails} flex__center`}>
        <p className={`${styles.app__specialMenu_menu_heading}`}>Cocktails</p>
        <div className={`${styles.app__specialMenu_menu_items}`}>
          {data.cocktails && data.cocktails.map(({ id, title, price, tags }: any) => {
            return (
              <div className={`${styles.app__menuitem}`} key={id}>
                <div className={`${styles.app__menuitem_head}`}>
                  <div className={`${styles.app__menuitem_name}`}>
                    <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                  </div>

                  <div className={`${styles.app__menuitem_dash}`} />

                  <div className={`${styles.app__menuitem_price}`}>
                    <p className='p__cormorant'>{price}</p>
                  </div>
                </div>

                <div className={`${styles.app__menuitem_sub}`}>
                  <p className='p__opensans' style={{ color: '#AAA' }}>{tags}</p>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
