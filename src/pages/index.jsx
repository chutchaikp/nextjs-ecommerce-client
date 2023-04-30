import HeroBanner from '@/components/hero-banner/HeroBanner';
import ProductCard from '../components/product-card/ProductCard.jsx';
import styles from './Index.module.scss';
import axios from 'axios';
import { fetchDataFromApi } from '@/utils/utils.js';
const Home = ({ data }) => {
  console.log(data.length);
  return (
    <div className={styles.index}>
      <div className={styles.hero}>
        <HeroBanner />
      </div>

      <div className={styles.wrapper}>
        <h2>Cushioning for Your Miles</h2>
        <p>
          A lightweight Nike ZoomX midsale is combine with increased stack
          heights to help provide cushioning during extended stretches of
          running
        </p>
      </div>

      <div className={styles.products}>
        {data.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const result = await fetchDataFromApi('/api/products?populate=*');
  return {
    props: {
      data: result.data,
    },
  };
}
