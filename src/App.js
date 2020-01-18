import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, BlogPage } from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        {/* Route to Home Page */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={BlogPage} />
      </Switch>
    </Router>
  )
}

export default App
