import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';
import Img1 from '../../assets/images/pet.jpg';
import Img2 from '../../assets/images/child.jpg';
import Img3 from '../../assets/images/key.webp';
import Img4 from '../../assets/images/wallet.webp';
import Img5 from '../../assets/images/luggage.jpg';
import Img6 from '../../assets/images/bicycle.jpeg';
import Img7 from '../../assets/images/vehicle.png';
import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={Img7}
        title={<span style={{ color: '#F5F5F5' }}>{'Vehicle Tracking'}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
      <ProductCollection
        image={Img1}
        title={<span style={{ color: '#F5F5F5' }}>{'Pet Tracking'}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
      <ProductCollection
        image={Img2}
        title={<span style={{ color: '#F5F5F5' }}>{'Child/Elderlt Tracking'}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
      <ProductCollection
        image={Img3}
        title={<span style={{ color: '#F5F5F5' }}>{'Key Tracking'}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
       <ProductCollection
        image={Img4}
        title={<span style={{ color: '#F5F5F5' }}>{'Wallet Tracking'}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
       <ProductCollection
        image={Img5}
        title={<span style={{ color: '#F5F5F5' }}>{'Luggage Tracking  '}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>}  
        link={'/shop'}
      />
       <ProductCollection
        image={Img6}
        title={<span style={{ color: '#F5F5F5' }}>{'Bicycle Tracking '}</span>}
        text={<span style={{ color: '#FF6F00' }}>{'SHOP NOW'}</span>} 
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
