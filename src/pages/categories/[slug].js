import ProductCard from '@/components/product-card/ProductCard';
import styles from './Categories.module.scss';
const Categories = () => {
	return (
		<div className={styles.categories}>
			<h1> Categories </h1>

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
			</div>
		</div>
	)
}
export default Categories;
