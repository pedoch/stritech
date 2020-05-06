import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const links = [{ href: '/our-firm', label: 'Our Offices' }].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Footer = () => {
	const [path, setPath] = useState('/');

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	return (
		<footer className={[styles.footer].join(' ')}>
			<p>&copy;&nbsp; 2020 StriTech</p>
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
