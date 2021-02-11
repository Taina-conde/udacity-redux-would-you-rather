import React from 'react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import LogInfo from './LogInfo';
import LogInPage from './LonInPage';


class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>   
          {
            this.props.login === true 
              ? <Route path = '/' component = {LogInPage}/>
              : (<div>
                  <Route path = '/' component = {Nav}/>
                  <Route path = '/' component = {LogInfo}/>
                  <Route path = '/' exact component = {Dashboard}/>
                  <Route path = '/questions/:questionId' component = {QuestionPage}/>
                  <Route path = '/leaderboard' component = {Leaderboard}/>
                  <Route path = '/add' component = {NewQuestion}/>
                  

              </div>)
            
          }
      </Router>
     
    )
  }
  
}
function mapStateToProps({ authedUser }) {
  return {
    login: authedUser === null 
  }
}

export default connect(mapStateToProps)(App);
