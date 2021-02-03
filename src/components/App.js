import React from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div >
        
      </div>
    );
  }
  
}

export default connect()(App);
