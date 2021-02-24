import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';


class Dashboard extends React.Component {
    state = {
        questionsShown: "unanswered"
    }
    handleClickUnanswered = (e) => {
        e.preventDefault();
        this.setState({
            questionsShown : "unanswered"
        });
    }
    handleClickAnswered = (e) => {
        e.preventDefault();
        this.setState({
            questionsShown: "answered"
        });
    }
    render() {
        const { questionsShown } = this.state;
        const { questionsIds, authedUser, users } = this.props;
        
        let answeredQuestionsIds = [];
        let unansweredQuestionsIds = [];
        if (authedUser !== null) {
            answeredQuestionsIds = Object.keys(users[authedUser].answers)
            unansweredQuestionsIds = questionsIds.filter(questionId => (!answeredQuestionsIds.includes(questionId)))
        }    
        return (
            <div className = 'container m-auto central'> 
                <ul className = 'nav nav-tabs'>
                    <li
                        className = 'nav-item'
                        onClick = {this.handleClickUnanswered}
                    >
                        <div 
                            className= {questionsShown === "unanswered" ? "active nav-link" : "nav-link"}  
                        >
                            Unanswered
                        </div>
                    </li>
                    
                        
                   <li
                    className = 'nav-item'
                    onClick = {this.handleClickAnswered}
                   >
                        <div 
                            className= {questionsShown === "answered" ? "active nav-link" : "nav-link"}
                            
                        >
                            Answered
                        </div>
                    </li>
                </ul>
                <div className = 'dashboard-content'>
                    
                    {questionsShown === "unanswered" && (
                        <ul className = 'list-group'>
                            {unansweredQuestionsIds.map(questionId => (
                                <li key = {questionId} className = 'list-group-item'>
                                    
                                    <Question 
                                        id = {questionId}
                                        parent = "dashboard"
                                        category = {questionsShown}
                                    />
                                </li>
                            ))}
                        </ul>
                    )
                    }
                    {questionsShown === "answered" && 
                    (
                        <ul className = 'list-group'>
                            {answeredQuestionsIds.map(questionId => (
                                <li key = {questionId} className = 'list-group-item'>
                                    
                                    <Question 
                                        id = {questionId}
                                        parent = "dashboard"
                                        category = {questionsShown}
                                    />

                                </li>
                            ))}
                        </ul>
                    )}

                </div>


            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        authedUser,
        users,
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);