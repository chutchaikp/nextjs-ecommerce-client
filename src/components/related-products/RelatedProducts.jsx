// import ProductCard from '../product-card/ProductCard';

import styles from './RelatedProducts.module.scss';

// TODO: create custom slider  ....

const RelatedProducts = () => {
  return (
    <div className={styles.relatedProducts}>
      <h1> TODO: You Might Also Like </h1>

      {/* TODO: slide with multi view */}

      {/* <div className="_caruosel">
        <div className="_wrapper">
          <div className="next">NEXT</div>
          <div className="prev">PREV</div>

          <div className="_items">
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
            <div className="_item">xx</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default RelatedProducts;

// export async function getStaticPathsx() {
//   const products = await fetchDataFromApi('/api/products?populate=*');
//   const paths = products?.data?.map((p) => ({
//     params: {
//       slug: p.attributes.slug,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticPropsx({ params: { slug } }) {
//   const product = await fetchDataFromApi(
//     `/api/products?populate=*&filters[slug][$eq]=${slug}`
//   );
//   const products = await fetchDataFromApi(
//     `/api/products?populate=*&[filters][slug][$ne]=${slug}`
//   );

//   return {
//     props: {
//       product,
//       products,
//     },
//   };
// }
