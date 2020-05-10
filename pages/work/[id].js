import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import MainLayout from '../../components/mainlayout/mainlayout';

import styles from '../../static/css/workpages.module.scss';

export default function WorkPages({ page }) {
	return (
		<MainLayout>
			<Head>
				<title>Case Study: {page.title} | StriTech</title>
			</Head>
			<div className={styles.workPagesMain}>
				<section className={styles.container}>
					<div className={styles.block}>
						<h1 className={styles.title}>{page.title}</h1>
					</div>
					<div className={styles.pars}>
						<h2>Problem</h2>
						<p>{page.problem}</p>
					</div>
					<div className={styles.block}>
						<img src={page.images.web} />
					</div>
					<div
						className={styles.solution}
						style={{ color: page.color, backgroundColor: page.backgroundColor }}
					>
						<div className={styles.pars}>
							<h2 style={{ color: page.color }}>Solution</h2>
							<div>
								{page.steps.map((step, index) => {
									return (
										<div key={index} style={{ marginBottom: '20px' }}>
											<h3 style={{ color: page.color }}>Step {index + 1}</h3>
											{step.map((string, index) => {
												return <p key={index}>{string}</p>;
											})}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<img style={{ alignSelf: 'center' }} src={page.images.full} />
				</section>
			</div>
		</MainLayout>
	);
}

export async function getStaticPaths() {
	const pages = (await import(`../../data/workpages.json`)).default;

	const id = pages.map((page) => page.id);

	const paths = id.map((id) => ({ params: { id } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { id } }) {
	const pages = (await import(`../../data/workpages.json`)).default;

	const page = pages.find((x) => x.id === id);

	return {
		props: {
			page,
		},
	};
}
