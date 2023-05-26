import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Login from './Components/Login'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import NotFound from './Components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
