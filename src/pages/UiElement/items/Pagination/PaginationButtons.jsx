import styles from './styles.module.css';

const PaginationButtons = () => {


return (
  <div className={styles.positioning__button}>
    <button className={styles.button}>{'<'}</button>
    {[...Array(4)].map((_, index) => {
        return (
          <button className={styles.button} key={index}>
            {index + 1}
          </button>)})}
          <button className={styles.button} >{'>'}</button>
  </div>
  );
};

export default PaginationButtons;