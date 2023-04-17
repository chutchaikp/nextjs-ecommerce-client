import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import ProductDetailsCarousel from '../../components/product-details-carousel/ProductDetailsCarousel.jsx'
import styles from './Product.module.scss';
const Product = () => {
	return (
		<div className={styles.product}>
			<div className={styles.left}>
				<ProductDetailsCarousel />
			</div>
			<div className={styles.right}>
				<div className={styles.details}>
					<div className={styles.title}>
						Jordan Retro 6 G
					</div>
					<div className={styles.price}>
						9.99
					</div>
					<div className={styles.includeTax}>
						incl. of taxes
					</div>
					<div className={styles.sizeRegion}>
						<div className={styles.sizeTitle}>
							<span>Select Size</span>
							<span>Select Guide</span>
						</div>
						<div className={styles.sizes}>
							<div className={styles.size}>
								UK 6
							</div>
							<div className={styles.size}>
								UK 7
							</div>
							<div className={styles.size}>
								UK 8
							</div>
							<div className={styles.size}>
								UK 9
							</div>
							<div className={styles.size}>
								UK 10
							</div>
							<div className={styles.size}>
								UK 11
							</div>
						</div>
						<span className={styles.selectionRequired}>
							Size selection is required!
						</span>
					</div>

					<div className={styles.buttons}>

						<div className={styles.addToCart}>
							<button>Add to Cart</button>
						</div>
						<div className={styles.whistlist}>
							<button>
								Whistlist
								<MdFavoriteBorder />
							</button>
						</div>
					</div>

					<div className={styles.desc}>
						<h3>Product details</h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro enim debitis dolor autem vitae repellat, qui, dolores laborum impedit pariatur totam cumque accusamus fugiat iure quidem ipsam illum sapiente voluptatem.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit numquam iusto libero blanditiis ipsam laudantium dicta quibusdam quidem quae!</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Product;
