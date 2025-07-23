import styles from './Loading.module.css';
import Loadingimg from '../img/loadingimg.svg';

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={Loadingimg} alt="Loading" />
    </div>
  );
}

export default Loading;
