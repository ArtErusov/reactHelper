import styles from './styles.module.css';

const SceletonCard = () => {

return (
  <div className={styles.sceleton__card}>
    <div className={styles.sceleton__img}></div>
    <div className={styles.sceleton__text}></div>
    <div className={styles.sceleton__text__mini}></div>
    <div className={styles.sceleton__price}></div>
    <div className={styles.sceleton__btn}></div>
  </div>
  );
};


export default SceletonCard;