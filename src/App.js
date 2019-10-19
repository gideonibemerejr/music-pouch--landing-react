import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' />
      </Switch>
    </Router>
  )
}

export default App
