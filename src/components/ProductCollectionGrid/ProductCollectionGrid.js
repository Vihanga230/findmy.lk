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
        title={'Vehicle Tracking'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={Img1}
        title={'Pet Tracking'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={Img2}
        title={'Child/Elderlt Tracking'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={Img3}
        title={'Key Tracking'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
       <ProductCollection
        image={Img4}
        title={'Wallet Tracking'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
       <ProductCollection
        image={Img5}
        title={'Luggage Tracking  '}
        text={'SHOP NOW'}
        link={'/shop'}
      />
       <ProductCollection
        image={Img6}
        title={'Bicycle Tracking '}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
