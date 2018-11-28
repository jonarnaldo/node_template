import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
        this.loadData(res.data);
        this.props.onLoad(res.data);
      }
    })
  }

  loadData = (data) => {
    this.setState(data)

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
    console.log('about rendered --->')
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

const mapStateToProps = state => ({
  items: state.about.items
})

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'ABOUT LOADED', data })
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
