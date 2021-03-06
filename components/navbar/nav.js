import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './nav.module.scss';

const links = [
  { href: '/why-us', label: 'Why StriTech?' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const [path, setPath] = useState('/');
  const [windowWidth, setWindowWidth] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    setPath(window.location.pathname);
  }, []);

  const onShowDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  return (
    <nav
      className={[styles.nav].join(' ')}
      style={
        path === '/work'
          ? {
              backgroundColor: 'rgba(255,255,255,0)',
              color: '#f9f9f9',
              paddingTop: '20px',
              paddingBottom: '20px',
            }
          : { paddingTop: '20px', paddingBottom: '20px' }
      }
    >
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            style={windowWidth < 690 ? { height: '30px' } : {}}
            src={
              windowWidth > 690
                ? '../../static/images/logo.png'
                : '../../static/images/logo-mobile.png'
            }
          />
        </a>
      </Link>
      <ul className={windowWidth < 690 && styles.noDisplay}>
        {links.map(({ key, href, label }) => (
          <Link href={href} key={key}>
            <a
              className={path === href && styles.active}
              style={path === '/work' ? { color: '#f9f9f9' } : {}}
            >
              <li>{label}</li>
            </a>
          </Link>
        ))}
      </ul>
      <Button
        type="primary"
        className={[styles.menu, windowWidth < 690 && styles.display].join(' ')}
        onClick={onShowDrawer}
      >
        <MenuOutlined style={{ fontSize: '16px', color: '#040404' }} />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onDrawerClose}
        visible={drawerVisible}
        className={styles.drawer}
      >
        {links.map(({ key, href, label }) => (
          <Link href={href} key={key}>
            <a>{label}</a>
          </Link>
        ))}
      </Drawer>
      <style jsx>{`
				:global(body) {
					margin: 0;
					width: 100%;
					height: 100%
					font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
						Helvetica, sans-serif;
				}
			`}</style>
    </nav>
  );
};

export default Nav;
