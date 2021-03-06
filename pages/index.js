import {
  CodeOutlined,
  LayoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Typing from 'react-typing-animation';
import Card from '../components/card/card';
import MainLayout from '../components/mainlayout/mainlayout';
import styles from '../static/css/index.module.scss';

const Home = () => {
  useEffect(() => {
    const isBrowser = typeof document !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;

    AOS.init({
      once: true,
      mirror: false,
      duration: 1000,
    });
  });
  const whatWeDoList = [
    {
      title: 'Web & Mobile Design',
      text: 'We deisgn simple modern responsive web and mobile applications.',
      icon: <LayoutOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
      link: '/services/#web-mobile-design',
      aos: 'fade-right',
    },
    {
      title: 'Web & Mobile Development',
      text: 'We develop functional, scalable and efficient web and mobile applications.',
      icon: <CodeOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
      link: '/services/#web-mobile-development',
      aos: 'fade-up',
    },
    {
      title: 'Ecommerce Sites',
      text: 'We build user friendly e-commerce sites from small to large businesses.',
      icon: <ShoppingCartOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
      link: '/services/#ecommerce',
      aos: 'fade-left',
    },
    // {
    // 	title: 'Design Consultation',
    // 	text: 'We provide consultations to clients for web and mobile applications.',
    // 	icon: <TeamOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
    // 	link: '/services/#design-consultation',
    // },
    {
      title: 'Web & Mobile Maintenance',
      text: 'We maintain already built web and mobile applications and help with scalability.',
      icon: <SettingOutlined style={{ fontSize: '50px', color: '#FEC75C' }} />,
      link: '/services/#web-mobile-maintenance',
      aos: 'fade-down',
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
            <Typing speed={50} blink={true} startDelay={500}>
              <h1>
                We bring <Typing.Delay delay={1000} />
                breathtaking designs.
                <Typing.Backspace count={21} delay={2000} />
                clear-cut engineering.
                <Typing.Backspace count={22} delay={2000} />
                cutting edge software.
                <Typing.Backspace count={22} delay={2000} />
                your dreams to life...
              </h1>
            </Typing>
          </span>
          <section className={styles.section}>
            <div
              className={[styles.block, styles.reverseWrap].join(' ')}
              style={{ padding: '10px' }}
            >
              <p data-aos="fade-left" style={{ textAlign: 'left' }}>
                StriTech, conceived in 2018, is a digital product and innovation agency focused on
                giving you entrensic design and functional web and mobile applications.
              </p>
              <img
                src="../static/images/design1.svg"
                alt="minions designing"
                style={{ marginBottom: '40px' }}
              />
            </div>
          </section>
          <span className={styles.triangleReverse}></span>
          <section
            className={[styles.section, styles.primary].join(' ')}
            style={{ backgroundColor: '#FBE2B1' }}
          >
            <div className={[styles.block].join(' ')} style={{ padding: '10px' }}>
              <img
                src="../static/images/design2.svg"
                alt="data analysis"
                style={{ marginBottom: '40px' }}
              />
              <p data-aos="fade-right" style={{ textAlign: 'right' }}>
                Our elite firm provides excellent services in design consultation, user interface
                and experience design, and full stack software engineering to bring your brilliant
                digital ideas into being for forward-thinking clients.
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
                    <a data-aos={item.aos}>
                      <Card>
                        <section className={styles.cardLay}>
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
