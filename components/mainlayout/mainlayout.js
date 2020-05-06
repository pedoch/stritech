import React from 'react';

import Nav from '../navbar/nav';
import Footer from '../footer/footer';

import styles from './mainlayout.module.scss';

export default function mainlayout({ children }) {
	return (
		<div className={styles.main}>
			<Nav />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
}
