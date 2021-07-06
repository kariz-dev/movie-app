import React from 'react'
import { 
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import App from './App'
import Home from './Home'

const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home}/>
    </Router>
  )
}

export default Routes