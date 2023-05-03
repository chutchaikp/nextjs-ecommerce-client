import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkoutForm/CheckoutForm.jsx';
// const stripePromise = loadStripe(pro cess.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
import styles from './Cart.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toCurrencyFormated } from '@/utils/utils.client.js';
import { postOrder } from '@/utils/utils.js';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  const [amount, setAmount] = useState(0);

  // set public
  useEffect(() => {
    try {
      const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      console.log(publicKey);
      setStripePromise(loadStripe(publicKey));

      const _amount = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      setAmount(_amount);
    } catch (error) {
      debugger;
    }
  }, [items]);

  useEffect(() => {
    async function stripeIntents() {
      try {
        // debugger;
        const currency = 'thb';
        // const { data } = await axios.post(
        //   'http://localhost:1337/api/orders',
        //   {
        //     products: [],
        //     email: 'chutchai.kp@gmail.com',
        //     amount,
        //     currency,
        //   }
        // );

        const { data } = await postOrder('/api/orders', {
          products: [],
          email: 'chutchai.kp@gmail.com',
          amount,
          currency,
        });
        const _clientSecret = data.clientSecret;
        setClientSecret(_clientSecret);
      } catch (error) {
        debugger;
      }
    }

    if (items.length > 0 && amount > 0) {
      stripeIntents();
    }
  }, [amount]);

  return (
    <div className={styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.summary}>
          <h1> Cart summary </h1>
          <div className={styles.amount}>{toCurrencyFormated(amount)}</div>
          <div className={styles.items}>
            {items.map((item, idx) => {
              const img =
                item.product.images.data[0].attributes.formats.small.url;
              const productName = item.product.name;
              const productQuantity = item.quantity;
              const total = item.quantity * parseFloat(item.product.price);
              const totalFormated = toCurrencyFormated(total);

              return (
                <div key={idx.toString()} className={styles.item}>
                  <div className={styles.image}>
                    <img src={img} alt="" />
                  </div>
                  <div className={styles.nameQuantity}>
                    <p className={styles.name}>{productName}</p>
                    <span>Qty {productQuantity}</span>
                  </div>
                  <div className={styles.total}>{totalFormated}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.totalDue}>
            <div className={styles.text}>Total due</div>
            <div className={styles.value}>{toCurrencyFormated(amount)}</div>
          </div>
        </div>
        <div className={styles.checkoutForm}>
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
