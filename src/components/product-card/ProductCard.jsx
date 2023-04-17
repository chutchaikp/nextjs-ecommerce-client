import Link from 'next/link';
import styles from './ProductCard.module.scss';
const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <Link href="/product/1">
        <div className={styles.card}>
          <img src="/images/product-1.webp" alt="" />
          <div className={styles.title}>Product name</div>
          <div className={styles.price}>
            <div className={styles.priceOn}>20.00</div>
            <div className={styles.priceOff}>25.00</div>
            <div className={styles.priceDiscountPercent}>20% off</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
