import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from '../static/css/testimonials.module.scss';

export default function testimonials({ testimonialList }) {
	return (
		<MainLayout>
			<Head>
				<title>Testimonials | StriTech</title>
			</Head>
			<div className={styles.testimonialsMain}>
				<div className={styles.container}>
					<section className={styles.section} style={{ paddingBottom: '0px' }}>
						<div className={styles.block}>
							<h1 className={styles.title}>Testimonials</h1>
						</div>
						<hr />
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							{testimonialList.map((testimonial, index) => {
								return (
									<div className={[styles.testimonial].join(' ')}>
										<span>
											<p className={styles.remark}>"{testimonial.remark}"</p>
											<p className={styles.name}>- {testimonial.name}</p>
											<p className={styles.position}>{testimonial.position}</p>
										</span>
										<Avatar
											size={100}
											className={styles.avatar}
											src={testimonial.image}
											icon={<UserOutlined />}
										/>
									</div>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const testimonialList = (await import(`../data/testimonials.json`)).default;

	return {
		props: {
			testimonialList,
		},
	};
}
