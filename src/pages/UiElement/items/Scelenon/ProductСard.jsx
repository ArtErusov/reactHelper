import styles from './styles.module.css';
import reboot from '../../../../assets/img/reboot.svg';

const ProductСard = ({ onButtonClick }) => {

return (
  <>
    <img className={styles.card__img} src="https://img.mvideo.ru/Pdb/small_pic/480/30079361b.jpg" alt="Изображение" />
    <p className={styles.card__title}>Samsung Galaxy S25</p>
    <button className={styles.card__btn}>Купить</button>
    <div className={styles.card__reboot} onClick={onButtonClick}>
        <img className={styles.card__reboot__img} src={reboot} alt="" />
    </div>
  </>
  );
};

export default ProductСard;