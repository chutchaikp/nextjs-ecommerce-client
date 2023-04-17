import { Carousel } from 'react-responsive-carousel';
import styles from './HeroBanner.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowRight } from 'react-icons/md';
const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.content}>
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={false}
          // renderArrowNext={(clickHandler, hasNext) => {
          //   if (hasNext) {
          //     return (
          //       <div className={styles.next}>
          //         <MdArrowRight />
          //       </div>
          //     );
          //   }
          // }}
        >
          <div className={styles.item}>
            <img src="/images/slide-1.png" alt="" />
            <p className={styles.legend}>SHOP NOW</p>
          </div>
          <div className={styles.item}>
            <img src="/images/slide-2.png" alt="" />
            <p className={styles.legend}>SHOP NOW</p>
          </div>
        </Carousel>
      </div>
      {/* <h1> HeroBanner </h1> */}
    </div>
  );
};
export default HeroBanner;
