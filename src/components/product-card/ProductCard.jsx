import Link from 'next/link';
import styles from './ProductCard.module.scss';
import {
  BaseApiUrl,
  toCurrencyFormated,
  toDiscountPercentage,
} from '@/utils/utils.client';

const ProductCard = ({ product }) => {
  const p = product.attributes;
  const trumbmail = p.trumbnail.data.attributes.url;
  return (
    <div className={styles.productCard}>
      <Link href={`/product/${p.slug}`}>
        <div className={styles.card}>
          <img src={trumbmail} alt="" />
          <div className={styles.title}>{p.name}</div>
          <div className={styles.price}>
            <div className={styles.priceOn}>{toCurrencyFormated(p.price)}</div>
            <div className={styles.priceOff}>
              {toCurrencyFormated(p.original_price)}
            </div>
            <div className={styles.priceDiscountPercent}>
              {toDiscountPercentage(p.price, p.original_price)}% off
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
