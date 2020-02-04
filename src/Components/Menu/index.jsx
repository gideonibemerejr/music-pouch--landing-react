import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Layout/Nav'

const Menu = ({ handleMenuClick }) => {
  return (
    <nav className='vh-100 bg-light-pink dt w-100 white'>
      <div
        style={{
          background: 'black no-repeat center right',
          backgroundSize: 'cover'
        }}
        className='h-100 flex flex-column justify-between'
      >
        <Nav handleMenuClick={handleMenuClick} color={'white'} />
        <ul
          onClick={handleMenuClick}
          className='cf list h-100 flex items-center justify-between mh4 pa0'
        >
          <li className='sans-serif tc mb4  '>
            <Link
              to='/'
              className='f-subheadline-ns f3 link dim hover-red fw5 white'
            >
              Home
            </Link>
          </li>
          <li className=' sans-serif mb4 tc '>
            <Link
              to='/blog'
              className='f-subheadline-ns f3 hover-red link dim fw5 white'
            >
              Blog
            </Link>
          </li>
          <li className=' sans-serif tc mb4 '>
            <button
              disabled
              href='/'
              className='f-subheadline-ns f3 link dim hover-red fw5 white bg-transparent bb-0 br-0 bl-0 bt-0'
            >
              Work <span className='f6'>coming soon</span>
            </button>
          </li>
        </ul>
        <div className='flex justify-between items-center nav mh4 pb4'>
          <div className='arrow bl bb bw4 b--white'></div>
          <div className='arrow br bb bw4  b--white'></div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
