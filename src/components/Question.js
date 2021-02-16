import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QuestionContent from './QuestionContent';

class Question extends React.Component {
    render(){
        const { users, question, id, parent} = this.props;
        console.log(question)
        console.log('id: ', id)
        
        return (        
            <div className = 'container m-auto'>  
                <div className = 'row border'>
                    <span className = 'capitalize'>{question.author}</span>
                    &nbsp; asks:
                </div>
                <div className = 'row'>
                    <div className = "user-avatar col-4 p-4 bg-light">
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
                                        <span>Would you rather:</span>
                                        <div className = "text-truncate">
                                            {question.optionOne.text} or {question.optionTwo.text}
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