import React from 'react'
import { Circle, Nav } from '../../Components'

import Menu from '../../Components/Menu'

const Pouch = props => {
  return props.isMenuOpen ? (
    <Menu handleMenuClick={props.handleMenuClick} />
  ) : (
    <article className=''>
      <div
        className='vh-100 dt w-100 flex flex-column  bg-dark-gray white cover'
        style={{
          background:
            'url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'
        }}
      >
        <Nav handleMenuClick={props.handleMenuClick} color={'black'} />
        <ul className='cf list pl0 ml0 w-100 h-100 flex justify-between items-center'>
          <li
            className='fl w-100 w-50-ns sans-serif'
            style={{ color: '#EEEEEE' }}
          >
            <div className='flex flex-column justify-center items-center'>
              <div>
                <h1 className='fw9 f-subheadline-ns f1 b dib pr3 lh-solid ma0 flex items-start h-100'>
                  <span>POUCH</span>{' '}
                  <span className='f1'>
                    <Circle />
                  </span>
                </h1>

                <blockquote className='ph0 pb2 mb3 mh0 mt2 flex flex-column'>
                  <p className=' measure f4-l f5 ma0 fw7'>Short writings</p>
                  <p className=' measure f4-l f5 ma0 fw7'>Escritos Cortos</p>
                  <p className=' measure f4-l f5 ma0 fw3'>短い文章</p>
                  <p className='measure f4-l f5 ma0 fw5'>Богино бичээсүүд</p>
                </blockquote>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Pouch
