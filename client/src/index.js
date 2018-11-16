import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

  }

  componentDidMount() {
    axios('http://localhost:8000/api/endpoint').then((res) => {
      console.log('axios --->', res)

      if (res.status === 200) {
        this.setState(res.data)
      }
    })
  }

  loadData = (data) => {
    this.setState({ items: data.items })
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.items.length < 1) {
      console.log('new items', this.state.items, nextState.items)
      return true;
    }

    return false
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render () {
    return (
      <div>
        <h2>About !!!</h2>
        {this.state.items.length > 0 ? this.state.items.map((item) => {
          return <div key={item}>{item}</div>
        }) : <div>loading...</div>}
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <div>
      <Link to="/about">About</Link>
      <Link to="/">Back</Link>
      <Switch>
        <Route exact path="/" component={About}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
