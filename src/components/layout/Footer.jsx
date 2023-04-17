// import { FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';
// const Footer = () => {
//   return (
//     <div className={styles.footer}>
//       <p>2023 Shoe Store All Rights Reserve</p>
//       <div className={styles.icons}>
//         <FaInstagram />
//         <FaTwitter />
//       </div>
//     </div>
//   );
// };
// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>
            <div>Find a store</div>
            <div>become a partner</div>
            <div>sign up for email</div>
            <div>send us feedback</div>
            <div>student discount</div>
          </div>
        </div>

        <div className={styles.center}>
          <div>get help</div>
          <div>Order Status</div>
          <div>Delivery</div>
          <div>Returns</div>
          <div>Payment Options</div>
          <div>Contact Us</div>
        </div>

        {/* MENU START */}
        <div className={styles.right}>
          <div>About nike</div>
          <div>News</div>
          <div>Careers</div>
          <div>Investors</div>
          <div>Sustainability</div>
        </div>

        <div className={styles.icons}>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>© 2023 Shoe, Inc. All Rights Reserved</div>

        <div>
          <div>Guides</div>
          <div>Terms of Sale</div>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
