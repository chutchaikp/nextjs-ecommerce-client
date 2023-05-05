/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  MdArrowDropDown,
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
import { fetchDataFromApi } from '@/utils/utils';
import { toCurrencyFormated } from '@/utils/utils.client';
const Navbar = () => {
  const router = useRouter(); // router.pathname
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

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
    if (router.pathname === '/cart' && showCartPopup === true) {
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

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetchDataFromApi('/api/categories?populate=*');
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCategories();
  }, []);

  return (
    <div className={` ${styles.navbar} ${scrolled ? styles.sticky : ''} `}>
      <div className={styles.navbarContent}>
        <div className={styles.left}>
          <Link href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className={styles.center}>
          <Link href="/">Home</Link>
          <Link href="/">
            <div
              className={styles.categories}
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <span>Categories</span>
              <MdArrowDropDown />
              {showCategories && (
                <div className={styles.categoriesMenu}>
                  <ul>
                    {categories.map((cat, idx) => {
                      return (
                        <li key={idx.toString()}>
                          <Link href={`/categories/${cat.attributes.slug}`}>
                            <span>{cat.attributes.name}</span>
                            <span>{cat.attributes.products?.data?.length}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </Link>
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
          <div className={styles.cartItems} onClick={() => alert('hi')}>
            <div className={styles.back}>
              <FaChevronLeft onClick={() => setShowCartPopup(false)} />
              <span>
                Your cart <b>({items.length} items)</b>
              </span>
            </div>

            {items.map((item, idx) => {
              const img =
                item.product.images.data[0].attributes.formats.small.url;
              const price = toCurrencyFormated(item.product.price);
              // item.product.price.toLocaleString('th-TH', {
              //   style: 'currency',
              //   currency: 'THB',
              // });

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
              {/* <Link href="/payment">PAY WITH STRIPE</Link> */}
              <Link href="/cart">PAY WITH STRIPE</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
