import styles from './Cart.module.scss';
const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1> Shopping Cart </h1>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>Cart Items</h3>
          <div className={styles.items}>
            <ul>
              <li>
                <img src="./images/p1.png" alt="" />
                <div className={styles.center}>
                  <h4>Jordan Retro 6 G</h4>
                  <p>Men s Golf Shoes</p>

                  <div className={styles.sizeAndQuantity}>
                    <p>Size</p>
                    <p>Quantity</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>9.99</div>
                  <button>delete</button>
                </div>
              </li>

              <li>
                <img src="./images/p1.png" alt="" />
                <div className={styles.center}>
                  <h4>Jordan Retro 6 G</h4>
                  <p>Men s Golf Shoes</p>

                  <div className={styles.sizeAndQuantity}>
                    <p>Size</p>
                    <p>Quantity</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>9.99</div>
                  <button>delete</button>
                </div>
              </li>

              <li>
                <img src="./images/p1.png" alt="" />
                <div className={styles.center}>
                  <h4>Jordan Retro 6 G</h4>
                  <p>Men s Golf Shoes</p>

                  <div className={styles.sizeAndQuantity}>
                    <p>Size</p>
                    <p>Quantity</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>9.99</div>
                  <button>delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <h3>Summary</h3>
          <div className={styles.box}>
            <div className={styles.subTotal}>
              <span>SUBTOTAL</span>
              <span>9.99</span>
            </div>
            <div className={styles.detail}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              autem nihil consectetur nostrum repudiandae suscipit tempore vero
              est rem tenetur!
            </div>
            <div className={styles.checkoutButton}>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <div className="emptyCart">
        <img src="./images/empty-cart.jpg" alt="" />
      </div>
    </div>
  );
};
export default Cart;
