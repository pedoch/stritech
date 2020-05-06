import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import {
	LayoutOutlined,
	CodeOutlined,
	ShoppingCartOutlined,
	TeamOutlined,
	SettingOutlined,
} from '@ant-design/icons';

import MainLayout from '../components/mainlayout/mainlayout';
import Card from '../components/card/card';

import styles from '../static/css/index.module.scss';

const Home = () => {
	const whatWeDoList = [
		{
			title: 'Web & Mobile Design',
			text: 'We deisgn simple modern responsive wesites/applications',
			icon: <LayoutOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
			link: '/services/#web-mobile-design',
		},
		{
			title: 'Web & Mobile Development',
			text: 'We deisgn simple modern responsive wesites/applications',
			icon: <CodeOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
			link: '/services/#web-mobile-development',
		},
		{
			title: 'Ecommerce Sites',
			text: 'We deisgn simple modern responsive wesites/applications',
			icon: (
				<ShoppingCartOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />
			),
			link: '/services/#ecommerce',
		},
		{
			title: 'Design Consultation',
			text: 'We deisgn simple modern responsive wesites/applications',
			icon: <TeamOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
			link: '/services/#design-consultation',
		},
		{
			title: 'Web & Mobile Maintenance',
			text: 'We deisgn simple modern responsive wesites/applications',
			icon: <SettingOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
			link: '/services/#web-mobile-maintenance',
		},
	];

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
								applications.
							</p>
							<img src='../static/images/design1.svg' alt='minions designing' />
						</div>
					</section>
					<span className={styles.triangleReverse}></span>
					<section
						className={[styles.section, styles.primary].join(' ')}
						style={{ backgroundColor: '#FBE2B1' }}
					>
						<div className={[styles.block].join(' ')}>
							<img src='../static/images/design2.svg' alt='data analysis' />
							<p>
								Our elite firm provides excelent services in design consultation, user
								interface and experience design, and full stack software engineering to
								bring your brilliant digital ideas into being for forward-thinking
								clients.
							</p>
						</div>
					</section>
					<span className={styles.triangle}></span>
					<section className={styles.section}>
						<div className={styles.block}>
							<h1>What we do...</h1>
						</div>
						<hr />
						<div className={[styles.block, styles.cardCont].join(' ')}>
							{whatWeDoList.map((item, index) => {
								return (
									<Link key={index} href={item.link}>
										<a>
											<Card>
												<section style={{ display: 'flex', flexDirection: 'column' }}>
													<h3>{item.title}</h3>
													{item.icon}
													<p>{item.text}</p>
												</section>
											</Card>
										</a>
									</Link>
								);
							})}
						</div>
					</section>
					<span className={styles.triangleReverse}></span>
					<section className={[styles.section, styles.primary].join(' ')}>
						<div className={[styles.block, styles.contact].join(' ')}>
							<p>Ready to get started?</p>
							<Link href='/contact'>
								<a>
									<h1>Tell Us About Your Project...</h1>
								</a>
							</Link>
						</div>
						<div className={[styles.block].join(' ')}>
							<img
								className={styles.hero}
								src='../static/images/design4.svg'
								alt='contact us'
							/>
						</div>
					</section>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
