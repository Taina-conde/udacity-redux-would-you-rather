import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    state = {
        questionsShown: "unanswered"
    }
    render() {
        const { questionsShown } = this.state;
        const { questionsIds, authedUser, users } = this.props;
        
        
        
        console.log(this.props);
        console.log(users[authedUser])
        let userAnswers = []
        if (authedUser !== null) {
            userAnswers = Object.keys(users[authedUser].answers)

        }
        const unansweredQuestionsIds = questionsIds.filter(questionId => (!userAnswers.includes(questionId)))
        console.log(userAnswers)
        
        
        return (
            <div>
                <ul>
                    <li 
                        className= {questionsShown === "unanswered" ? "active" : ""}
                        
                    >
                        Unanswered
                    </li>
                    <li 
                        className= {questionsShown === "answered" ? "active" : ""}
                        
                    >
                        Answered
                    </li>
                </ul>
                <div>
                    { questionsShown === "unanswered" && (
                        <ul>
                            {unansweredQuestionsIds.map(questionId => (
                                <li key = {questionId}>
                                    Question component
                                </li>
                            ))}
                        </ul>
                    )
                    }
                    {questionsShown === "answered" && (
                        <ul>
                            {userAnswers.map(questionId => (
                                <li key = {questionId}>
                                    Question Component

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