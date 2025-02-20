import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Free Delivery Islandwide'}
        
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return Applicable up to 14 Days '}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        
      />
    </div>
  );
};

export default AttributeGrid;
