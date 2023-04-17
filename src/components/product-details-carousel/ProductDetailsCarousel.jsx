import { Carousel } from 'react-responsive-carousel';
import styles from './ProductDetailsCarousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
const ProductDetailsCarousel = () => {
  return (
    <div className={styles.productDetailsCarousel}>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/images/p1.png" alt="" />
        <img src="/images/p2.png" alt="" />
        <img src="/images/p3.png" alt="" />
        <img src="/images/p4.png" alt="" />
        <img src="/images/p5.png" alt="" />
      </Carousel>
    </div>
  );
};
export default ProductDetailsCarousel;
