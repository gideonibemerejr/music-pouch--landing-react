import React, { Component } from 'react'

import { NavLink, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { PhotoEssay, Pouch } from './components'
import { Circle, Nav } from '../../Components/'

export default class BlogPage extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className='bg-black'>
          <Nav handleMenuClick={this.props.handleMenuClick} color={'white'} />
        </div>
        <section className='section bg-black white pa5-l ph2 pv5'>
          <nav className='mh7-l mh4 bb b--white'>
            <ul className=' list w-100 flex justify-start pl0 ml0'>
              <li className='fl sans-serif mr4'>
                <NavLink
                  activeClassName='active'
                  className='link hover-red dim'
                  exact
                  to='/blog'
                >
                  THE LATEST
                </NavLink>
              </li>
              <li className='fl sans-serif mr4'>
                <NavLink
                  activeClassName='active'
                  className='link hover-red dim'
                  to='/blog/pouch'
                >
                  POUCH
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <Route exact path='/blog/photoessays' component={PhotoEssay} />
        <Route
          exact
          path='/blog/pouch'
          render={() => {
            return (
              <Pouch {...this.state} handleMenuClick={this.handleMenuClick} />
            )
          }}
        />
      </Router>
    )
  }
}
