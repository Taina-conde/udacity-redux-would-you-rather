import React from 'react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import LogInPage from './LonInPage';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router> 
        <React.Fragment> 
          <Nav/> 
          <div className = 'container'>
            
            {this.props.login === true 
              ? <LogInPage/>
              : <Switch>
                  <Route path = '/' exact component = {Dashboard}/>
                  <Route path = '/questions/:questionId' exact component = {QuestionPage}/>
                  <Route path = '/leaderboard' exact component = {Leaderboard}/>
                  <Route path = '/add' exact component = {NewQuestion}/>
                  <Route path = '/' component = {NotFound}/>
                </Switch>
            } 
              
          </div>
          <Footer/>
        </React.Fragment>
      </Router>
     
    )
  }
  
}
function mapStateToProps({ authedUser }) {
  return {
    login: authedUser === null,
    authedUser 
  }
}

export default connect(mapStateToProps)(App);
