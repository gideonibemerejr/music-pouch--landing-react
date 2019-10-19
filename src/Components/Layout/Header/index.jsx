import React from 'react'
import styles from './Header.module.css'
import info from './assets/info.svg'

const Header = () => {
  return (
    <header>
      <section className={styles.header_grid}>
        <nav
          className={`${styles.nav} flex justify-between items-center  mh4 mt5`}
        >
          <div className={`${styles.arrow}  bw4 bt bl`} />
          <div className={`${styles.arrow} bw4 bt br ${styles.right}`}>
            <div className='ma3'>
              <img src={info} alt='' />
            </div>
          </div>
        </nav>
        <div className='mh4 pv4 flex flex-column justify-end'>
          <div>
            <div className='flex flex-row items-center items-end ns'>
              <h1 className='f-headline-ns f1 lh-solid ma0 dib pr3'>
                Music Pouch
              </h1>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
