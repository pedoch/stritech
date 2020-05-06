import React from 'react';

import styles from './card.module.scss';

export default function card({ link, children }) {
	return <div className={styles.card}>{children}</div>;
}
