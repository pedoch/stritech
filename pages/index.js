import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/index.module.scss';

const Home = () => {
	return (
		<MainLayout>
			<Head>
				<title>Home | StriTech</title>
			</Head>
			<div className={styles.indexMain}>
				<div className={styles.container}>
					<span className={[styles.typewriterTitle].join(' ')}>
						<h1>Design, funtionality and everything nice...</h1>
					</span>
					<section className={styles.section}>
						<div className={[styles.block, styles.reverseWrap].join(' ')}>
							<p>
								StriTech, founded in 2020, is a digital product and innovation agency
								focused on giving you entrensic design and functional web and mobile
								applications. Our elite firm provides excelent services in design
								consultation, user interface and experience design, and full stack
								software engineering to bring your brilliant digital ideas into being
								for forward-thinking clients.
							</p>
							<img src='../static/images/design1.svg' alt='minions designing' />
						</div>
					</section>
					<div className={styles.triangleReverse}></div>
					<section className={[styles.section, styles.primary].join(' ')}>
						<div className={[styles.block].join(' ')}>
							<img src='../static/images/design1.svg' alt='minions designing' />
							<p>
								StriTech, founded in 2020, is a digital product and innovation agency
								focused on giving you entrensic design and functional web and mobile
								applications. Our elite firm provides excelent services in design
								consultation, user interface and experience design, and full stack
								software engineering to bring your brilliant digital ideas into being
								for forward-thinking clients.
							</p>
						</div>
					</section>
					<div className={styles.triangle}></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
