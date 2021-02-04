import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component {
    render(){
        const {authedUser, user, question} = this.props;
        return (
            <div>
                <div>
                    <h4>{`${question.author} asks:`}</h4>
                </div>
                <div>
                    <div className = "user-avatar">
                        <img src = {users[question.author].avatar.avatarURL} alt = {`avatar-${question.author}`}/>
                    </div>
                    <div className = "question-content">

                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser users}, {id}) {
    return {
        authedUser,
        users,
        question: questions[id]
    }
}
export default connect()(Question);