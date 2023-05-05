import { MdFavoriteBorder, MdKeyboardDoubleArrowUp, MdOutlineFavorite } from 'react-icons/md';
import ProductDetailsCarousel from '../../components/product-details-carousel/ProductDetailsCarousel.jsx'
import RelatedProducts from '../../components/related-products/RelatedProducts.jsx';
import styles from './Product.module.scss';
import { fetchDataFromApi } from '@/utils/utils.js';
import { toCurrencyFormated, toDiscountPercentage } from '@/utils/utils.client.js';
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown.js';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cartSlice.js';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [showError, setShowError] = useState(true);
	const [selectedSize, setSelectedSize] = useState(null);

	const p = product.data[0].attributes

	const handleAddToCart = (e) => {
		try {
			e.preventDefault();
			if (!selectedSize) {
				setShowError(true)
				// scroll to "size" div
				document.getElementById("sizeGrid").scrollIntoView({ block: 'start', behavior: 'smooth' })
				return;
			} else {
				// setShowError(false)
			}

			notify();
			dispatch(addItem({ product: p, size: selectedSize, quantity: 1, }))

		} catch (error) {
			console.log(error)
		}
	}
	const notify = () => {
		toast.success("Success. Check your cart!", {
			// position: "bottom-right",
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			// theme: "dark",
		});
	};

	return (
		<div className={styles.product}>
			<ToastContainer />
			<div className={styles.rows}>
				<div className={styles.left}>
					<ProductDetailsCarousel images={p} />
				</div>
				<div className={styles.right}>
					<div className={styles.details}>
						<div className={styles.title}>
							{/* Jordan Retro 6 G */}
							{p.name}
						</div>
						<div className={styles.price}>
							{/* 9.99 */}
							<div className={styles.currentPrice}>

								{toCurrencyFormated(p.price)}
							</div>
							<div className={styles.originalPrice}>
								{p.original_price && toCurrencyFormated(p.original_price)}
							</div>
							<div className={styles.discountPercent}>
								{p.original_price && toDiscountPercentage(p.price, p.original_price)}
								off
							</div>
						</div>
						<div className={styles.includeTax}>
							incl. of taxes ...
						</div>
						<div className={styles.sizeRegion}>
							<div className={styles.sizeTitle}>
								<span>Select Size</span>
								<span>Select Guide</span>
							</div>
							<div id="sizeGrid" className={styles.sizes}>
								{p.size.data.map((s, idx) => {
									const borderColor = selectedSize === s.size ? 'red' : null;
									const borderWidth = selectedSize === s.size ? '3px' : null;
									return (<button key={idx} className={styles.size} disabled={!s.enabled}
										onClick={() => setSelectedSize(s.size)}
										style={{ borderColor, borderWidth, }} >
										{s.size}
									</button>)
								})}
								{/* <div className={styles.size}>
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
								</div> */}
							</div>
							{showError &&
								<span className={styles.selectionRequired}>
									Size selection is required!
								</span>

							}
						</div>

						<div className={styles.buttons}>

							<div className={styles.addToCart}>
								<button onClick={handleAddToCart}>Add to Cart</button>
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
							<div>
								<ReactMarkdown>

									{p.desc}
								</ReactMarkdown>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className={styles.related}>
				<RelatedProducts />
			</div>
		</div>
	)
}
export default Product;

// exec when compile time only
// paths =
// [ 
// 	{ params: { slug } }, 
// 	{ params: { slug } }, 
// ]
export async function getStaticPaths() {
	try {
		const products = await fetchDataFromApi('/api/products')
		// const paths = products.data.map((product) => {
		// 	return { params: { slug: product.attributes.slug }, }
		// })
		const paths = products?.data?.map((product) => ({
			params: { slug: product.attributes.slug }
		}))

		return {
			paths,
			fallback: false
		}
	} catch (error) {
		debugger;
		return {
			paths: null,
			fallback: false,
		};
	}
}

export async function getStaticProps({ params }) {
	try {
		const { slug } = params;
		const product = await fetchDataFromApi(`/api/products?filters[slug][$eq]=${slug}&populate=*`)
		return {
			props: {
				product,
			}
		}
	} catch (error) {
		return null;
	}
}
