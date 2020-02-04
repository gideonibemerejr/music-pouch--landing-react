import React, { Component } from 'react'

import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom'
import { PhotoEssays, Pouch, Blog } from '../index'
import { PouchDetail, PhotoEssayDetail } from '../index'
import { Nav } from '../../Components/'

export default class BlogPage extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className='bg-black'>
          <Nav handleMenuClick={this.props.handleMenuClick} color={'white'} />
        </div>
        <section className='section bg-black white pa4-l ph7-l  pt5 pb2'>
          <nav className='mh7-l mh4 bb b--white'>
            <ul className=' list w-100 flex justify-between  pl0 ml0'>
              <li className='fl sans-serif mr4'>
                <NavLink
                  activeClassName='active'
                  className='link hover-red '
                  exact
                  to='/blog'
                  style={{ outline: 0 }}
                >
                  The Latest
                </NavLink>
              </li>
              <div>
                <li className='fl sans-serif mr4'>
                  <NavLink
                    activeClassName='active'
                    className='link hover-red '
                    to='/blog/pouch'
                    style={{ outline: 0 }}
                  >
                    POUCH
                  </NavLink>
                </li>
                <li className='fl sans-serif'>
                  <NavLink
                    activeClassName='active'
                    className='link hover-red '
                    to='/blog/essays'
                    style={{ outline: 0 }}
                  >
                    ESSAYS
                  </NavLink>
                </li>
              </div>
            </ul>
          </nav>
        </section>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/essays' component={PhotoEssays} />
        <Route
          exact
          path='/blog/pouch'
          render={() => {
            return (
              <Pouch {...this.state} handleMenuClick={this.handleMenuClick} />
            )
          }}
        />
        <Route exact path='/blog/pouch/:slug' component={PouchDetail} />
        <Route exact path='/blog/essays/:slug' component={PhotoEssayDetail} />
      </Router>
    )
  }
}
