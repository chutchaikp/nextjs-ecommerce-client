// import styles from './Navbar.module.scss';
// const Navbar = () => {
// 	return (
// 		<div className={styles.navbar}>
// 			<h1> Navbar </h1>
// 		</div>
// 	)
// }
// export default Navbar;

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag,
  MdRemoveCircle,
  MdShoppingBag,
  MdShoppingCart,
  MdShoppingCartCheckout,
} from 'react-icons/md';
import { FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.scss';
import {
  decreaseQuantity,
  increseQuantity,
  removeItem,
} from '@/redux/cartSlice';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter(); // router.pathname
  const dispatch = useDispatch();

  const [scrolled, setScrolled] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const { items } = useSelector((state) => state.cart);
  // debugger;
  const subTotal = items.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);
  const subTotalFormated = subTotal.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
  });

  useEffect(() => {
    if (router.pathname === '/payment' && showCartPopup === true) {
      setShowCartPopup(false);
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={` ${styles.navbar} ${scrolled ? styles.sticky : ''} `}>
      <div className={styles.navbarContent}>
        <div className={styles.left}>
          {/* <Link href={'/'}>Shoe Store</Link> */}
          <Link href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className={styles.center}>
          <Link href="/">Home</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.right}>
          <div className={styles.fav}>
            <MdOutlineFavoriteBorder />
            <div className={styles.totalFav}>5</div>
          </div>
          <div className={styles.cart}>
            <MdOutlineShoppingBag onClick={() => setShowCartPopup(true)} />
            {/* {items?.length > 0 && ( */}
            <div className={styles.qty}>{items.length}</div>
            {/* )} */}
          </div>

          {/* <button onClick={() => setShowCartPopup(true)}>show popup</button> */}
        </div>
      </div>

      {showCartPopup && (
        <>
          <div
            className={styles.cartPopup}
            onClick={() => setShowCartPopup(false)}
          ></div>
          <div className={styles.cartItems} onclick={() => alert('hi')}>
            <div className={styles.back}>
              <FaChevronLeft />
              <span>
                Your cart <b>({items.length} items)</b>
              </span>
            </div>

            {items.map((item, idx) => {
              // debugger;
              const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
              const img =
                backendUrl +
                item.product.images.data[0].attributes.formats.small.url;
              const price = item.product.price.toLocaleString('th-TH', {
                style: 'currency',
                currency: 'THB',
              });

              return (
                <div key={idx.toString()} className={styles.cartItem}>
                  <div className={styles.left}>
                    <img src={img} alt=" " />
                  </div>
                  <div className={styles.right}>
                    <div className={styles.namePrice}>
                      <div className={styles.productName}>
                        <b>{item.product.name}</b>
                      </div>
                      <span className={styles.price}>
                        {' '}
                        <b>{price}</b>
                      </span>
                    </div>

                    <div className={styles.qtyRemove}>
                      <div className={styles.qty}>
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increseQuantity(item))}>
                          +
                        </button>
                      </div>
                      <div className={styles.remove}>
                        <MdRemoveCircle
                          onClick={() => {
                            dispatch(removeItem(item));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={styles.subTotal}>
              <p>Subtotal</p>
              <p> {subTotalFormated}</p>
            </div>

            <div className={styles.btn}>
              <Link href="/payment">
                <button>PAY WITH STRIPE</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
