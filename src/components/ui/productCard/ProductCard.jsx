import styles from './styles.module.css';
import cardIcon from '../../../assets/img/cardIcon.svg';
import likeIkon from '../../../assets/img/likeIkon.svg';
// import { useState } from 'react';

const ProductСard = () => {
// const [addToFavorites, setAddToFavorites] = useState(false)
return (
  <div className={styles.card}>
    <img className={styles.img} src="https://img.mvideo.ru/Pdb/small_pic/480/30079361b.jpg" alt="Изображение" />
    <p className={styles.title}>Samsung Galaxy S25</p>
    <p className={styles.price}>27 459 ₽</p>
    <div className={styles.flex}>
      <button className={styles.btn}>
        <img className={styles.cardIcon} src={cardIcon} alt="" />
      </button>
      <div className={styles.likeIkon} >
        <img src={likeIkon} alt="" />
      </div>
    </div>
  </div>
  );
};

export default ProductСard;