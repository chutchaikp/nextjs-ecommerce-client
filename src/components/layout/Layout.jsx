// import styles from './Layout.module.scss';
// const Layout = () => {
// 	return (
// 		<div className={styles.layout}>
// 			<h1> Layout </h1>
// 		</div>
// 	)
// }
// export default Layout;

import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Head>
          <title>Online Shoe Store</title>
          {/* <meta */}
        </Head>
        <Navbar />
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
