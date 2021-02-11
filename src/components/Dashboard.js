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
        
        
        
        console.log(this.props);
        console.log(users[authedUser])
        let answeredQuestionsIds = [];
        let unansweredQuestionsIds = [];
        if (authedUser !== null) {
            answeredQuestionsIds = Object.keys(users[authedUser].answers)
            unansweredQuestionsIds = questionsIds.filter(questionId => (!answeredQuestionsIds.includes(questionId)))

        }
        
       
        
        
        return (
            <div className = 'container m-auto'> 
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
                <div>
                    
                    {questionsShown === "unanswered" && (
                        <ul>
                            {unansweredQuestionsIds.map(questionId => (
                                <li key = {questionId}>
                                    {console.log("unanswered id: ",questionId)}
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
                        <ul>
                            {answeredQuestionsIds.map(questionId => (
                                <li key = {questionId}>
                                    {console.log("answerd Id: ", questionId)}
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