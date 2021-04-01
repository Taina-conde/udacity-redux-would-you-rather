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
      this.props.handleInitialData();
  }
  render() {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    // Nav height + margin = 112 | Footer height + margin = 172
    // Nav + Footer = 284
    const minHeight = vh - 284
    console.log('vh', vh)
    console.log('minHeight', minHeight)
    return (
      <Router> 
        <React.Fragment> 
          <Nav/> 
          <div className = 'container' style = {{minHeight: minHeight}}>
            
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

export default connect(mapStateToProps, { handleInitialData })(App);
