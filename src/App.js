import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { HomePage, BlogPage } from './Pages'
import { PhotoEssay, Pouch } from './Pages/BlogPage/components'
import Menu from './Components/Menu'

const client = new ApolloClient({
  uri: 'https://music.gideonibemerejr.com/graphql'
})

class App extends Component {
  state = {
    title: 'Music Pouch',
    tagline: 'An idea on two iPhones',
    isMenuOpen: true
  }

  handleMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {/* Route to Home Page */}
            <Route
              exact
              path='/'
              render={() => (
                <HomePage
                  {...this.state}
                  handleMenuClick={this.handleMenuClick}
                />
              )}
            />
            <Route exact path='/blog' component={BlogPage} />
            <Route path='/blog/photoessays' component={PhotoEssay} />
            <Route
              path='/blog/pouch'
              render={() => (
                <Pouch {...this.state} handleMenuClick={this.handleMenuClick} />
              )}
            />
            {/* <Route exact path='blog/photoessay/:slug' component={Pouch} /> */}
            {/* <Route exact path='blog/pouch/:slug' component={Pouch} /> */}
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
