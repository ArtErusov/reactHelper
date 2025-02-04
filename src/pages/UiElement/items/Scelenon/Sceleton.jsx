import ProductСard from '../../../../components/ui/productCard/ProductCard';
import SceletonCard from './SceletonCard';
import styles from './styles.module.css';
import data from '../../../../data/dataCard.json';
import reboot from '../../../../assets/img/reboot.svg';
import { useState } from 'react';

const Sceleton = () => {

const widthContainer = 163;
const [isLoading, setIsLoading] = useState(true);

const handleButtonClick = () => {
  setIsLoading(false);
  // Тут должна быть загрузка с сервера
  setTimeout(() => {
    setIsLoading(true);
  }, 1000);
};

const getRandomValue = () =>  Math.floor(Math.random() * 8);

return ( 
  <>
    <div style={{ height: 270, width: widthContainer}} className={styles.mainContainer}>
      <button onClick={() => handleButtonClick()} className={styles.reboot}>
        <img src={reboot} alt="" />
      </button>
      <div style={{ margin: 12}}>
        {isLoading ? <ProductСard data={data[getRandomValue()]}/> : <SceletonCard />} 
       </div>
    </div>
    <div style={{ width: widthContainer}} className={styles.bottomOfTheCard}>Sceleton</div>
    
  </>
  );
};

export default Sceleton;
