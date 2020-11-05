import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'

interface MatchParams {
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props: MatchParams) => <Component {...props} {...rest} />}
            />
          ))}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
