import { AddPolygon } from 'pages/AddPolygon'
import logo from './assets/images/logo.png'
import './assets/styles/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { History } from 'pages/History';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to="/"><img src={logo} className='App-logo' alt='logo' /></Link>
        </header>
        <Switch>
          <Route exact path="/">
            <AddPolygon />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
