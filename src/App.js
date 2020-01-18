import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, BlogPage } from './Pages'
import { PhotoEssay, Pouch } from './Pages/BlogPage/components'
function App() {
  return (
    <Router>
      <Switch>
        {/* Route to Home Page */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route path='/blog/photos' component={PhotoEssay} />
        <Route path='/blog/pouch' component={Pouch} />
      </Switch>
    </Router>
  )
}

export default App
