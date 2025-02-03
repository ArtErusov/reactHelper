import ProductСard from '../../../../components/ui/productCard/ProductCard';
import SceletonCard from './SceletonCard';
import styles from './styles.module.css';
import { useState } from 'react';
import data from '../../../../data/dataCard.json'

const Sceleton = () => {

const widthContainer = 163;
const [isLoading, setIsLoading] = useState(true);

// const handleButtonClick = () => {
//   setIsLoading(false);
//   // Тут должна быть загрузка с сервера
//   setTimeout(() => {
//     setIsLoading(true);
//   }, 1000);
// };
return ( 
  <>
    <div style={{ height: 270, width: widthContainer}} className={styles.mainContainer}>
      <div style={{ margin: 12}}>
        {isLoading ? <ProductСard data={data[5]}/> : <SceletonCard />} 
       </div>
    </div>
    <div style={{ width: widthContainer}} className={styles.bottomOfTheCard}>Sceleton</div>
    
  </>
  );
};

export default Sceleton;
