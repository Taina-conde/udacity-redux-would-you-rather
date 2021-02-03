import React from 'react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';

class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div >
          <Dashboard/>
      </div>
    );
  }
  
}

export default connect()(App);
