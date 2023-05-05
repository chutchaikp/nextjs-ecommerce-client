import ProductCard from '@/components/product-card/ProductCard';
import styles from './Categories.module.scss';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import { fetchDataFromApi } from '@/utils/utils';
import { useState } from 'react';
import Image from 'next/image';

const maxResult = 3;
const maxResultCount = 3;

const Categories = ({ categories, products, slug }) => {

	const [pageIndex, setPageIndex] = useState(1);

	const { data, error, isLoading, } = useSWR(`/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
		fetchDataFromApi,
		{
			// fallback: products,
			fallbackData: products,
		})

	// const { query } = useRouter()


	return (
		<div className={styles.categories}>
			<h1> Categories: {categories?.[0]?.attributes?.name} </h1>

			<div className={styles.products}>

				{data?.data?.map((product, idx) => (
					<ProductCard key={idx} product={product} />
				))}

				{/* {products.map((product, idx) => (
					<ProductCard key={idx} product={product} />
				))} */}

				{/* <ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard /> */}

			</div>

			<div className={styles.paging}>
				{/* PAGINATION BUTTONS START */}
				{data?.meta?.pagination?.total > maxResultCount && (
					<div >
						<button disabled={pageIndex === 1}
							onClick={() => setPageIndex(pageIndex - 1)}
						>
							Previous
						</button>

						<span >{`${pageIndex} of ${data && data.meta.pagination.pageCount
							}`}</span>

						<button
							disabled={
								pageIndex ===
								(data && data.meta.pagination.pageCount)
							}
							onClick={() => setPageIndex(pageIndex + 1)}
						>
							Next
						</button>
					</div>
				)}
				{/* PAGINATION BUTTONS END */}
				{isLoading && (
					<div >
						{/* <img src="/images/logo.svg" width={150} alt="" /> */}
						<Image src="/images/logo.svg" width={150} alt="" />
						<span >Loading...</span>
					</div>
				)}
			</div>
		</div>
	)
}
export default Categories;

// define a list of paths to be statically generated
// will run during build time only
// 
// paths = [
// 	{ params: { slug: xxx } },
// 	{ params: { slug: yyy } },
// ]
export async function getStaticPaths() {

	const category = await fetchDataFromApi("/api/categories?populate=*");
	const paths = category?.data?.map((c) => ({
		params: {
			slug: c.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// debugger;
	const { slug } = params;
	const cat = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
	const res = await fetchDataFromApi(`/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=3&pagination[pageSize]=${maxResult}`)

	return {
		props: {
			categories: cat.data,
			products: res.data,
			slug,
		}
	}
}
