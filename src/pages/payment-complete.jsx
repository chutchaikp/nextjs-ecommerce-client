import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {} from 'react-icons/';
// import doFirework from '../utils/doFirework';

import styles from './PaymentComplete.module.scss';
import {
  MdShoppingBag,
  MdShoppingBasket,
  MdShoppingCart,
  MdShoppingCartCheckout,
} from 'react-icons/md';
import { resetItems } from '@/redux/cartSlice';
import Link from 'next/link';
// import Link from 'next/link';
// import { resetItems } from '../../redux/cartSlice';
// import { Link } from 'react-router-dom';
const PaymentComplete = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
    runFirework();
  }, []);

  const runFirework = () => {
    try {
      var duration = 10 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
    } catch (error) {}
  };

  return (
    <div className={styles.paymentComplete}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <MdShoppingCartCheckout />
        </div>

        <h1> Thank You For Your Order!</h1>

        <Link href={'/'}>CONTINUE SHOPPING</Link>
      </div>
      {/* <button onClick={() => runFirework()}>RUN FIREWORK</button> */}
    </div>
  );
};
export default PaymentComplete;
