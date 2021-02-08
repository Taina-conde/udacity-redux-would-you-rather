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
            <div>
                <ul>
                    <li 
                        className= {questionsShown === "unanswered" ? "active" : ""}
                        onClick = {this.handleClickUnanswered}
                        
                    >
                        Unanswered
                    </li>
                    <li 
                        className= {questionsShown === "answered" ? "active" : ""}
                        onClick = {this.handleClickAnswered}
                        
                    >
                        Answered
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