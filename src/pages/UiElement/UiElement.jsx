import Pagination from './items/Pagination/Pagination';
import Sceleton from './items/Scelenon/Sceleton';
import styles from './styles.module.css';

const UiElement = () => {
  return (
    <div className={styles.grid__one}>
      <div className={styles.grid__one__one}>
        <Sceleton />
      </div>
      <div className={styles.grid__one__two}>
        <Pagination />
      </div>
    </div>
  );
};

export default UiElement;
