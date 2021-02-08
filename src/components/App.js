import React from 'react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';


class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          {
            this.props.loading === true 
              ? null 
              : (<div>
                  <Route path = '/' exact component = {Dashboard}/>
                  <Route path = '/questions/:questionId' component = {QuestionPage}/>
                  

              </div>)
            
          }

        </React.Fragment> 
      </Router>
     
    )
  }
  
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null 
  }
}

export default connect(mapStateToProps)(App);
