import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/services.module.scss';

export default function work() {
	return (
		<MainLayout>
			<Head>
				<title>Services | StriTech</title>
			</Head>
			<div className={styles.servicesMain}>
				<h1>Work</h1>
			</div>
		</MainLayout>
	);
}
