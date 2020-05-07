import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/services.module.scss';

export default function services() {
	return (
		<MainLayout>
			<Head>
				<title>Services | StriTech</title>
			</Head>
			<div className={styles.servicesMain}>
				<div className={styles.container}>
					<section className={styles.section} style={{ paddingBottom: '0px' }}>
						<div className={styles.block}>
							<h1 className={styles.title}>Our Custom Business Software Solutions</h1>
							<h3 className={styles.subtitle} id='web-mobile-design'>
								We’re frontiers in engineering and design but our most valuable service
								is how we combine these disciplines to deliver for our clients.
							</h3>
						</div>
						<hr />
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							<h1 style={{ marginBottom: '40px' }}>Web & Mobile Design</h1>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<div className={styles.text}>
									<p>
										Designing is not just painting your ideas on a canvas, it's taking
										ideas to a whole new level of creativity.
									</p>
									<p>
										Here at StriTech we pride ourselves in giving you simplicity but also
										innovation on the wave of a mouse.
									</p>
									<p>
										Our resourceful designers use worldclass tools and resources to bring
										the ideas of forward thinking clients to light. They create user
										friendly designs while meeting the requirements of our clients.
									</p>
								</div>
								<img src='../static/images/design5.svg' />
							</div>
						</div>
					</section>
					<span
						className={styles.triangleReverse}
						id='web-mobile-development'
					></span>
					<section className={[styles.section, styles.primary].join(' ')}>
						<div className={styles.block}>
							<h1 style={{ marginBottom: '40px' }}>Web & Mobile Development</h1>
							<div className={[styles.service].join(' ')}>
								<img src='../static/images/design6.svg' />
								<div className={styles.text}>
									<p>
										Quality engineering doesn't grow on trees. We provide it to our
										clients everyday.
									</p>
									<p>
										Our brilliant engineers take designs and bring them to life using the
										best tools out there.
									</p>
									<p>
										They create lightweight, functional, efficient and easy to use web and
										mobile applications while meeting modern client and user requirements.
									</p>
								</div>
							</div>
						</div>
					</section>
					<span className={styles.triangle} id='ecommerce'></span>
					<section className={[styles.section].join(' ')}>
						<div className={styles.block}>
							<h1 style={{ marginBottom: '40px' }}>E-commerce Sites</h1>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<div className={styles.text}>
									<p>
										A lot of business owners are moving their shop to the web. You can
										trust us to help you join the trend.
									</p>
									<p>
										We provide reliable platforms that can link buyers directly to their
										favourite stores, allowing them to order goods directly to their door
										step
									</p>
									<p>
										We use CMS platforms like Shopify and WordPress to create long lasting
										e-commerce sites that would help small to large businesses increase
										their customers base.
									</p>
								</div>
								<img src='../static/images/design7.svg' />
							</div>
						</div>
					</section>
					<span className={styles.triangleReverse} id='design-consultation'></span>
					<section className={[styles.section, styles.primary].join(' ')}>
						<div className={styles.block}>
							<h1 style={{ marginBottom: '40px' }}>Web & Mobile Maintenance</h1>
							<div className={[styles.service].join(' ')}>
								<img src='../static/images/design9.svg' />
								<div className={styles.text}>
									<p>
										You have a site that you need fixed or managed? We got you covered.
									</p>
									<p>
										A lot of web and mobile applications are either outdated or are unable
										to handle massive traffic.
									</p>
									<p>
										We fix up web and mobile applications according to your specifications
										and help you maintain your code base, keeping you the site modern,
										scalable and robust.
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* <span className={styles.triangle} id='web-mobile-maintenance'></span>
					<section className={[styles.section].join(' ')}>
						<div className={styles.block}>
							<h1 style={{ marginBottom: '40px' }}>Web & Mobile Maintenance</h1>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<div className={styles.text}>
									<p>
										Designing is not just painting your ideas on a canvas, it's taking
										ideas to a whole new level of creativity.
									</p>
									<p>
										Here at StriTech we pride ourselves in giving you simplicity but also
										innovation on the wave of a mouse.
									</p>
									<p>
										Our resourceful designers use worldclass tools and resources to bring
										the ideas of forward thinking clients to reality. They create user
										friendly designs while meeting the requirements of our clients
									</p>
								</div>
								<img src='../static/images/design9.svg' />
							</div>
						</div>
					</section> */}
				</div>
			</div>
		</MainLayout>
	);
}
