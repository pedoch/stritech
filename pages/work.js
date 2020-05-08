import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/work.module.scss';

export default function work() {
	const workList = [
		{
			title: 'FurstLegal',
		},
	];
	return (
		<MainLayout>
			<Head>
				<title>Services | StriTech</title>
			</Head>
			<div className={styles.workMain}>
				<div className={styles.container}>
					<section className={styles.section} style={{ paddingBottom: '0px' }}>
						<div className={styles.block}>
							<h1 className={styles.title}>Our Work</h1>
							<p className={styles.subtitle}>
								Check out some of the work we've done for our clients
							</p>
						</div>
					</section>
					<section className={styles.section}>
						<div
							className={styles.block}
							style={{
								color: '#f9f9f9',
								backgroundColor: '#303542',
							}}
						>
							<div
								className={styles.case}
								style={{
									// alignSelf: 'flex-start',
									backgroundColor: '#303542',
								}}
							>
								<h1>FurstLegal</h1>
								<p>A fresh look for a briliant law firm</p>
								<Link href='/work/furstlegal'>
									<a style={{ color: '#f9f9f9' }}>
										<p>Read Case Study</p>
									</a>
								</Link>
								<img src='../static/images/work/furstlegal/furstlegal-full.png' />
								<p style={{ alignSelf: 'flex-start' }}>Legal | Web</p>
							</div>
							{/* <div
								className={styles.case}
								style={{
									alignSelf: 'flex-end',
									backgroundColor: 'firebrick',
								}}
							>
								<h1>FurstLegal</h1>
								<p>Hello</p>
								<Link href='#'>
									<a style={{ color: '#f9f9f9' }}>
										<p>Read Case Study</p>
									</a>
								</Link>
								<img src='../static/images/work/furstlegal/furstlegal-full.png' />
							</div> */}
						</div>
					</section>
				</div>
			</div>
		</MainLayout>
	);
}
