import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { HomePage, PortfolioPage } from './Pages';

import Menu from './Components/Menu';

const client = new ApolloClient({
  uri: 'https://music.gideonibemerejr.com/graphql',
});

class App extends Component {
  state = {
    title: 'Music Pouch',
    tagline: 'An idea on two iPhones',
    isMenuOpen: false,
  };

  handleMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {/* Route to Home Page */}
            {this.state.isMenuOpen ? (
              <Menu handleMenuClick={this.handleMenuClick} />
            ) : (
              <>
                <Route
                  exact
                  path='/work'
                  render={() => (
                    <PortfolioPage
                      handleMenuClick={this.handleMenuClick}
                      {...this.state}
                    />
                  )}
                />
                <Route
                  path='/'
                  render={() => (
                    <HomePage
                      {...this.state}
                      handleMenuClick={this.handleMenuClick}
                    />
                  )}
                />
              </>
            )}
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
