import React from 'react';
import { connect } from 'react-redux';
import QuestionContent from './QuestionContent';



class Question extends React.Component {
    render(){
        const {authedUser, users, question, id, parent} = this.props;
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
                        
                        <div>
                            { parent === 'dashboard'
                                && (
                                    <div>
                                        <span>Would you rather:</span>
                                        <div className = "text-truncate">
                                            {question.optionOne.text} or {question.optionTwo.text}
                                        </div>
                                        {/* TODO: add Link of react-router-dom to /questions/:questionId */}
                                        
                                    </div>
                                    

                                )
                            }
                            { parent === "QuestionPage"
                                && <QuestionContent/>
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, {id}) {
    return {
        authedUser,
        users,
        question: questions[id]
    }
}
export default connect(mapStateToProps)(Question);