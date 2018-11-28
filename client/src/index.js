import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import { Provider, connect} from 'react-redux';
import store from './store';
import Home from './components/home';
import About from './components/about';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Link to="/about">About</Link>
        <Link to="/">Back</Link>
        <Switch>
          <Route exact path="/" component={About}/>
        </Switch>
      </div>
    </Provider>
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
