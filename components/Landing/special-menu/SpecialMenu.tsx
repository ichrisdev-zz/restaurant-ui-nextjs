import React from 'react';

import images from '../../../constants/images';
import data from '../../../constants/data';
import '../../../styles/modules/Home/SpecialMenu.module.scss';
import Image from 'next/image';


const SpecialMenu = () => (
  <div className='app__specialMenu flex--center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>Tragos que se ajustan a su paladar</p>
        <Image src={images.spoon} alt="spoon" className='spoon__img' />
      </div>
      <h1 className='headtext__cormorant'>Especiales de Hoy</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Vinos y Cerveza</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines && data.wines.map(({id, title, price,tags}: any) => {
              return(
                <div className='app__menuitem'>
                  <div className='app__menuitem-head'>
                    <div className='app__menuitem-name'>
                      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                    </div>
                  
                    <div className='app__menuitem-dash'/>
                  
                    <div className='app__menuitem-price'>
                      <p className='p__cormorant'>{price}</p>
                    </div>
                  </div>

                  <div className='app__menuitem-sub'>
                    <p className='p__opensans' style={{ color: '#AAA'}}>{tags}</p>
                  </div>
                
                </div>
              )
            })
          }
        </div>
      </div>
      
      <div className='app__specialMenu-menu_img'>
        <Image src={images.menu} alt="menu img"/>
      </div>
      
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails && data.cocktails.map(({id, title, price,tags}: any) => {
              return(
                <div className='app__menuitem'>
                  <div className='app__menuitem-head'>
                    <div className='app__menuitem-name'>
                      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
                    </div>
                  
                    <div className='app__menuitem-dash'/>
                  
                    <div className='app__menuitem-price'>
                      <p className='p__cormorant'>{price}</p>
                    </div>
                  </div>

                  <div className='app__menuitem-sub'>
                    <p className='p__opensans' style={{ color: '#AAA'}}>{tags}</p>
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
