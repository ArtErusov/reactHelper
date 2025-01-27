import ProductСard from './ProductСard';
import SceletonCard from './SceletonCard';
import styles from './styles.module.css';
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

return (
  
  <>
    <div style={{ height: 233, width: widthContainer}} className={styles.mainContainer}>
      {isLoading ? <ProductСard onButtonClick={handleButtonClick} /> : <SceletonCard />}  
    </div>
    <div style={{ width: widthContainer}} className={styles.bottomOfTheCard}>Sceleton</div>
    
  </>
  );
};

export default Sceleton;
