import HeroBanner from '@/components/hero-banner/HeroBanner';
import ProductCard from '../components/product-card/ProductCard.jsx';
import styles from './Index.module.scss';
const Index = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
export default Index;
