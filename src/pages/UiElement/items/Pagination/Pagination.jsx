import styles from './styles.module.css';
import data from '../../../../data/dataCard.json';
import ProductСard from '../../../../components/ui/productCard/ProductCard';
import PaginationButtons from './PaginationButtons';
// import { useState } from 'react';

const Pagination = () => {

const widthContainer = 345;



return (
  <>
    <div style={{ height: 270, width: widthContainer}} className={styles.mainContainer}>
      <div className={styles.positioning}>
        <ProductСard data={data[0]} />
        <ProductСard data={data[1]} />
        <PaginationButtons />
      </div>
    </div>
    <div style={{ width: widthContainer}} className={styles.bottomOfTheCard}>Pagination</div>
    
  </>
  );
};

export default Pagination;
