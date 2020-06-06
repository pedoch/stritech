import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/careers.module.scss';

export default function careers() {
  return (
    <MainLayout>
      <Head>
        <title>Careers | StriTech</title>
      </Head>
      <div className={styles.careerMain}>
        <h1>Join The Team</h1>
      </div>
    </MainLayout>
  );
}
