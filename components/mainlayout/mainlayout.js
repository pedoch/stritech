import React, { useEffect } from 'react';

// import AOS from 'aos';

import Nav from '../navbar/nav';
import Footer from '../footer/footer';

import styles from './mainlayout.module.scss';

export default function mainlayout({ children }) {
  useEffect(() => {
    const isBrowser = typeof document !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;

    AOS.init({
      // disable: 'mobile',
      once: true,
      duration: 1000,
    });
  });

  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
