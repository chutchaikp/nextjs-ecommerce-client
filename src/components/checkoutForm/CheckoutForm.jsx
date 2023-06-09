import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

// import './checkoutForm.scss';
import styles from './CheckoutForm.module.scss';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!stripe || !elements) {
        return;
      }
      setIsProcessing(true);

      // *****
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-complete`,
        },
      });
      if (error) {
        setMessage(error.message);
      }

      setIsProcessing(false);
    } catch (error) {
      debugger;
    }
  };
  return (
    <div className={styles.checkoutForm}>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement />
        <button disabled={isProcessing} id="submit">
          <span>{isProcessing ? 'Processing...' : 'Pay now'}</span>
        </button>

        {message && (
          <div className={styles.err} id="payment-message">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
