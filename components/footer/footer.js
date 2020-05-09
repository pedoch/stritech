import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const links = [{ href: '/our-firm', label: 'Our Offices' }].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Footer = () => {
	const footerLinks = [
		{
			title: 'About',
			links: [
				{
					text: 'Why StriTech?',
					link: '/why-us',
				},
				{
					text: 'Our Work',
					link: '/work',
				},
				{
					text: 'Testemonials',
					link: '/testemonials',
				},
				{
					text: 'Terms of Service & Privacy',
					link: '/privacy',
				},
			],
		},
		{
			title: 'Services',
			links: [
				{
					text: 'Web & Mobile Design',
					link: '/services/#web-mobile-design',
				},
				{
					text: 'Web & Mobile Development',
					link: '/services/#web-mobile-development',
				},
				{
					text: 'Ecommerce Sites',
					link: '/services/#ecommerce',
				},
				{
					text: 'Web & Mobile Maintenance',
					link: '/services/#web-mobile-maintenance',
				},
			],
		},
		{
			title: 'Connect',
			links: [
				{
					text: 'Contact',
					link: '/contact',
				},
				{
					text: 'Careers',
					link: '/careers',
				},
				{
					text: 'Twitter',
					link: '/#',
				},
				{
					text: 'LinkedIn',
					link: '/#',
				},
			],
		},
	];

	const tools = {
		title: 'Tools',
		links: [
			{
				text: 'React JS',
				link: 'https://reactjs.org/',
			},
			{
				text: 'React Native',
				link: 'https://reactnative.dev/',
			},
			{
				text: 'Node JS',
				link: 'https://nodejs.org/',
			},
			{
				text: 'MongoDB',
				link: 'https://www.mongodb.com/',
			},
			{
				text: 'Python',
				link: 'https://www.python.org/',
			},
		],
	};

	const [path, setPath] = useState('/');

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	return (
		<footer className={[styles.footer].join(' ')}>
			{/* <span className={styles.triangleReverse}></span> */}
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
			<div className={styles.info}>
				<span className={styles.intro}>
					<img src='../../static/images/logofull.png' className={styles.logo} />
					<p>Take your ideas to the next level</p>
					<h3>Let's work together...</h3>
					<p style={{ marginBottom: '5px' }}>Email: pedroogheneochuko@gmail.com</p>
					<p>Phone: +2349073707630</p>
				</span>
				{footerLinks.map((cat, index) => {
					return (
						<span key={index} className={styles.list}>
							<h3>{cat.title}</h3>
							<ul>
								{cat.links.map((link, indx) => {
									return (
										<Link key={indx} href={link.link}>
											<a>
												<li>{link.text}</li>
											</a>
										</Link>
									);
								})}
							</ul>
						</span>
					);
				})}
				{
					<span className={styles.list}>
						<h3>{tools.title}</h3>
						<ul>
							{tools.links.map((link, indx) => {
								return (
									<a href={link.link} target='_blank'>
										<li>{link.text}</li>
									</a>
								);
							})}
						</ul>
					</span>
				}
			</div>
			<p style={{ alignSelf: 'center' }}>
				Copyright &nbsp;&copy;&nbsp; 2020 StriTech. All rights reserved
			</p>
			<style jsx>{`
				:global(body) {
					margin: 0;
					padding: 0;
					width: 100%;
					font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
						Helvetica, sans-serif;
				}
			`}</style>
		</footer>
	);
};

export default Footer;
