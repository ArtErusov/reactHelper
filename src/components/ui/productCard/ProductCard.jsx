import styles from './styles.module.css';
import cardIcon from '../../../assets/img/cardIcon.svg';
import likeIkon from '../../../assets/img/likeIkon.svg';
// import { useState } from 'react';

const ProductСard = ({data}) => {
// const [addToFavorites, setAddToFavorites] = useState(false)
return (
  <div className={styles.card}>
    <img className={styles.img} src={data.img} alt="Изображение" />
    <p className={styles.title}>{data.text}</p>
    <p className={styles.price}>{data.price} ₽</p>
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