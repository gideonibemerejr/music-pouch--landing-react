import React from 'react'
import styles from './Header.module.css'
import info from './assets/info.svg'
import { Circle, Nav } from '../..'

const Header = ({ handleMenuClick }) => {
  return (
    <header>
      <section className={styles.header_grid}>
        <Nav handleMenuClick={handleMenuClick} />
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
