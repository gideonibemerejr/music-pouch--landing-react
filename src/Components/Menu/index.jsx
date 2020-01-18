import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Layout/Nav'

const Menu = ({ handleMenuClick }) => {
  return (
    <nav className='vh-100 bg-light-pink dt w-100'>
      <div
        style={{
          background: 'black no-repeat center right',
          backgroundSize: 'cover'
        }}
        className='h-100 flex flex-column justify-between'
      >
        <Nav handleMenuClick={handleMenuClick} />
        <ul
          onClick={handleMenuClick}
          className='cf list pa4 w-100 h-100 flex justify-between items-end'
        >
          <li className='sans-serif tc mb4 mr3 '>
            <Link
              to='/'
              className='f-subheadline-ns f3 link dim hover-red fw7 white'
            >
              Home
            </Link>
          </li>
          <li className=' sans-serif mb4 tc mr3'>
            <Link
              to='/blog/pouch'
              className='f-subheadline-ns f3 hover-red link dim fw7 white'
            >
              Pouch
            </Link>
          </li>
          <li className=' sans-serif tc mb4 mr3'>
            <Link
              to='/blog/photoessays'
              className='f-subheadline-ns f3 link dim hover-red fw7 white'
            >
              Essays
            </Link>
          </li>
          <li className=' sans-serif tc mb4 '>
            <Link
              to='/blog/photoessays'
              className='f-subheadline-ns f3 link dim hover-red fw7 white'
            >
              Work
            </Link>
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
