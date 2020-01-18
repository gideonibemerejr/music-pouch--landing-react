import React from 'react'
import styles from './Header.module.css'
import info from './assets/info.svg'
import { Circle, Nav } from '../..'

const Header = ({ handleMenuClick }) => {
  return (
    <header>
      <section className={styles.header_grid}>
        <nav
          className={`${styles.nav} flex justify-between items-center  mh4 pt5`}
        >
          <div className={`${styles.arrow}  bw4 bt bl `} />
          <div className={`${styles.arrow} bw4 bt br  ${styles.right}`}>
            <div
              onClick={handleMenuClick}
              className='tr pa3 black hover-red dim'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-info'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='12' y1='16' x2='12' y2='12'></line>
                <line x1='12' y1='8' x2='12' y2='8'></line>
              </svg>
            </div>
          </div>
        </nav>
        <div className='mh4 pv4 flex flex-column justify-end'>
          <div>
            <div className='flex flex-row items-center items-end-ns'>
              <h1 className='f-headline-ns f1 lh-solid ma0 dib pr3'>
                Music Pouch
              </h1>
              <div className='flex flex-column-ns flex-row-s items-center mb2-ns'>
                <Circle />
                <b className={`${styles.text_avail} dib mb4-ns mb0-s`}>AVAIL</b>
              </div>
            </div>
            <blockquote className='ph0 pb2 mb3 mh0 mt3'>
              <p className='f2-ns f5'>
                An Independent{' '}
                <i className='link hover-dark-red'>public relations firm</i> and{' '}
                <i className='link hover-dark-red'>creative studio</i>
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
