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
        let userAnswers = [];
        let unansweredQuestionsIds = [];
        if (authedUser !== null) {
            userAnswers = Object.keys(users[authedUser].answers)
            unansweredQuestionsIds = questionsIds.filter(questionId => (!userAnswers.includes(questionId)))

        }
        
        console.log(userAnswers)
        
        
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
                    { questionsShown === "unanswered" && (
                        <ul>
                            {unansweredQuestionsIds.map(questionId => (
                                <li key = {questionId}>
                                    <Question id = {questionId}/>
                                </li>
                            ))}
                        </ul>
                    )
                    }
                    {questionsShown === "answered" && (
                        <ul>
                            {userAnswers.map(questionId => (
                                <li key = {questionId}>
                                    <Question id = {questionId}/>

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