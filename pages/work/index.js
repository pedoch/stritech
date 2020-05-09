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
									key={work.slug + index}
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
										<p style={{ alignSelf: 'flex-start' }}>{work.tool}</p>
									</div>
								</div>
							);
						})}
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
