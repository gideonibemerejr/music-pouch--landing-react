import React from 'react'
import styles from '../Header/Header.module.css'

const Nav = ({ handleMenuClick, color }) => {
  return (
    <nav className={`${styles.nav} flex justify-between items-center  mh4 pt4`}>
      <div className={`${styles.arrow}  bw4 bt bl b--${color}`} />
      <div className={`${styles.arrow} bw4 bt br b--${color} ${styles.right}`}>
        <div
          onClick={handleMenuClick}
          className={`tr pa3 ${color} hover-red dim`}
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
  )
}

export default Nav
