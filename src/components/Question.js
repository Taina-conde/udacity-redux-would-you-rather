import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QuestionContent from './QuestionContent';

class Question extends React.Component {
    render(){
        const { users, question, id, parent} = this.props;
        console.log(question)
        console.log('id: ', id)
        const optionOne = question.optionOne.text;
        const optionTwo = question.optionTwo.text;
        
        return (        
            <div className = 'card m-auto'>  
                <div className = 'card-header font-weight-bold'>
                    <span className = 'capitalize'>{question.author + " "}</span>
                    <span>asks:</span>
                </div>
                <div className = 'card-body d-flex'>
                    <div className = "user-avatar col-4 pt-3 rounded align-self-center">
                        <img 
                            src = {users[question.author].avatar.avatarURL} 
                            alt = {`avatar-${question.author}`}
                            className = 'img-fluid'
                        />
                    </div>
                    <div className = "question-content col-8 p-4">    
                        <div>
                            { parent === 'dashboard'
                                && (
                                    <div>
                                        <span className = "font-weight-bold">Would you rather:</span>
                                        <div className = "text-truncate">
                                            {optionOne.charAt(0).toUpperCase() + optionOne.slice(1)} or {optionTwo}
                                        </div>
                                        
                                        <Link to = {`/questions/${id}`}>View poll</Link>                                     
                                        
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

function mapStateToProps({questions, users}, {id}) {
    return {
        users,
        question: questions[id]
    }
}
export default connect(mapStateToProps)(Question);