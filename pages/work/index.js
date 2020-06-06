import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import MainLayout from '../../components/mainlayout/mainlayout';

import styles from '../../static/css/work.module.scss';

export default function work({ workList }) {
  let scrollToComponent;
  useEffect(() => {
    const isBrowser = typeof document !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;

    AOS.init({
      disable: 'mobile',
      once: false,
      mirror: false,
      duration: 1000,
    });
    scrollToComponent = require('react-scroll-to-component');
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>Services | StriTech</title>
      </Head>
      <div className={styles.workMain}>
        <div className={styles.container}>
          {/* <section className={styles.section} style={{ paddingBottom: '0px' }}>
            <div className={styles.block}>
              <h1 className={styles.title}>Our Work</h1>
              <p className={styles.subtitle}>
                Check out some of the work we've done for our clients
              </p>
            </div>
          </section> */}
          <section className={styles.section}>
            {workList.map((work, index, worklist) => {
              return (
                <div
                  className={[styles.block, styles.caseCont].join(' ')}
                  key={work.id + index}
                  style={{
                    color: work.color,
                    backgroundColor: work.backgroundColor,
                    height: '100vh',
                    width: '100vw',
                    maxWidth: '100vw',
                  }}
                  ref={(div) => {
                    work.id = div;
                  }}
                >
                  <span style={{ height: '30px' }}>
                    {index !== 0 && (
                      <Button
                        shape='circle'
                        type='ghost'
                        style={{ borderColor: '#f9f9f9' }}
                        className={styles.move}
                        icon={<ArrowUpOutlined style={{ color: '#f9f9f9' }} />}
                        onClick={() => {
                          if (worklist[index - 1])
                            scrollToComponent(worklist[index - 1].id, {
                              offset: 0,
                              align: 'top',
                              duration: 500,
                            });
                        }}
                      />
                    )}
                  </span>
                  <div className={styles.case}>
                    <div data-aos='fade-up'>
                      <h1>{work.title}</h1>
                      <p>{work.clip}</p>
                      <Link href={`/work/${work.slug}`}>
                        <a style={{ color: work.color }}>
                          <p>Read Case Study</p>
                        </a>
                      </Link>
                      <p>{work.tool}</p>
                    </div>
                    <img data-aos='fade-down' src={`${work.images.full}`} />
                  </div>
                  <span style={{ height: '30px' }}>
                    {index < worklist.length - 1 && (
                      <Button
                        shape='circle'
                        type='ghost'
                        style={{ borderColor: '#f9f9f9' }}
                        className={styles.move}
                        icon={<ArrowDownOutlined style={{ color: '#f9f9f9' }} />}
                        onClick={() => {
                          if (worklist[index + 1])
                            scrollToComponent(worklist[index + 1].id, {
                              offset: 0,
                              align: 'top',
                              duration: 500,
                            });
                        }}
                      />
                    )}
                  </span>
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
