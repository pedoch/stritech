import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import MainLayout from '../../components/mainlayout/mainlayout';

import styles from '../../static/css/work.module.scss';

export default function work({ workList }) {
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
						{workList.map((work, index) => {
							return (
								<div
									className={[styles.block, styles.caseCont].join(' ')}
									key={work.id + index}
									style={{
										color: work.color,
										backgroundColor: work.backgroundColor,
									}}
								>
									<div className={styles.case}>
										<h1>{work.title}</h1>
										<p>{work.clip}</p>
										<Link href={`/work/${work.id}`}>
											<a style={{ color: work.color }}>
												<p>Read Case Study</p>
											</a>
										</Link>
										<img src={`${work.images.full}`} />
										<p>{work.tool}</p>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</div>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const workList = (await import(`../../data/workpages.json`)).default;

	return {
		props: {
			workList,
		},
	};
}
