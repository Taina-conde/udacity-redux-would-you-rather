import React from 'react';
import {connect} from 'react-redux';

class QuestionContent extends React.Component {
    render() {
        const { question, user } = this.props;
        const userAnswered = user.answers.includes(question.id);
        if (userAnswered === true) {
            const numOptionOneVotes = question.optionOne.votes.length
            const numOptionTwoVotes = question.optionTwo.votes.length 
            const totalVotes = numOptionOneVotes + numOptionTwoVotes
            
            return (
                <div>
                    <h3>Results:</h3>
                    <div>
                        <div>
                            <div>{`Would you rather ${question.optionOne.text}?`}</div>
                            <div> {/** TODO: percentage bar of votes */}</div>
                            <div>{ `${numOptionOneVotes} out of ${totalVotes} votes`} </div>
                        </div>
                        <div>
                            <div>{`Would you rather ${question.optionTwo.text}?`}</div>
                            <div> {/** TODO: percentage bar of votes */}</div>
                            <div>{ `${numOptionTwoVotes} out of ${totalVotes} votes`} </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {}
            </div>
        )
    }
}
function mapStateToProps({questions, users, authedUser}, { id }) {
    return {
        question: questions[id],
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(QuestionContent);