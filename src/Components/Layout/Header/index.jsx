import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Circle } from '../..';

const Header = ({ handleMenuClick }) => {
  return (
    <header>
      <section className={styles.header_grid}>
        <nav
          className={`${styles.nav} flex justify-between items-center  mh4 pt5`}
        >
          <div className={`${styles.arrow}  bw4 bt bl `} />
          <div className={`${styles.arrow} bw4 bt br  ${styles.right}`} />
        </nav>
        <div className='mh4 pv4 flex flex-column justify-end'>
          <div>
            <div className='flex flex-row items-center items-end-ns'>
              <h1 className='f-headline-ns f1 lh-solid ma0 dib pr3 no-underline-hover'>
                Music Pouch
              </h1>
              <div className='flex flex-row items-center mb2-ns'>
                <Circle />
                <b className={`${styles.text_avail} dib mb4-ns mb0-s`}>
                  AVAILABLE
                </b>
              </div>
            </div>
            <blockquote className='ph0 pb2 mb3 mh0 mt3'>
              <p className='f2-ns f5'>
                An Independent{' '}
                <Link to='/blog' className='link'>
                  <i className='link hover-dark-red'>blog</i>
                </Link>
                , <i className='link hover-dark-red'>public relations firm</i>,
                and <i className='link hover-dark-red'>creative studio</i>
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
