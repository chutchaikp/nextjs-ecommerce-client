import HeroBanner from '../components/hero-banner/HeroBanner.jsx';
import styles from './Hello.module.scss';
const Hello = () => {
  return (
    <div className={styles.hello}>
      {/* <h1> Hello </h1> */}
      <HeroBanner />
    </div>
  );
};
export default Hello;
