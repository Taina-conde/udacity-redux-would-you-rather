import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QuestionContent from './QuestionContent';

class Question extends React.Component {
    render(){
        const {authedUser, users, question, id, parent} = this.props;
        console.log(question)
        console.log('id: ', id)
        
        return (

            
            <div>
            {/**TODO: replace the outer div with <Link to = {`/questions/${id}`}.
            I cant do it now because of error in dependency when installing 
            react-router-dom
            */}
                <div>
                    <h4>{`${question.author} asks:`}</h4>
                </div>
                <div>
                    <div className = "user-avatar">
                        <img 
                            src = {users[question.author].avatar.avatarURL} 
                            alt = {`avatar-${question.author}`}
                            style = {{height: "100px"}}/> {/**TODO: add styles with className */}
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
                                        
                                        <Link to = {`/questions/${id}`}>View poll</Link>
                                        {/** TODO: erase the following QuestionContent component. 
                                         * This component is here just for debug purposes. 
                                         */}
                                        
                                        
                                    </div>
                                    

                                )
                            }
                            { parent === "questionPage"
                                && <QuestionContent id = {id}/>
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