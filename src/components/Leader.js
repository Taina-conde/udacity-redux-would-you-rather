import React from 'react';

function Leader(props) {
    const { user, score } = props;
    const numQuestionsAnswered = Object.keys(user.answers).length;
    const numQuestionsAsked = user.questions.length;
    return (
        <div className = 'rounded border d-sm-flex p-4 mb-4'>
            
                    <div className = 'col-sm-3 user-avatar'>
                        <div className = 'img-avatar rounded-circle'>
                            <img
                                className = 'img-fluid rounded-circle avatar'
                                src = {user.avatar.avatarURL}
                                alt = {`Avatar of ${user.id}`}
                                
                            />
                        </div>
                    </div>
                    <div className= 'col-sm-6 d-flex flex-column justify-content-between'>
                        <div className = 'bg-warning'>
                            <h3>{user.name}</h3>
                        </div>
                        <div className = 'border-bottom d-flex justify-content-between'>
                            <div>Answered questions: </div>
                            <div>{numQuestionsAnswered}</div>
                        </div>
                        <div className = 'd-flex justify-content-between' >
                            <div>Created questions:</div> 
                            <div>{numQuestionsAsked}</div>
                        </div>
                    </div>
                    
                    <div className = 'col-sm-3 d-flex flex-sm-column border p-0 score-box rounded'>
                        <div className = 'col-6 col-sm-12 bg-light score-text d-flex align-items-center justify-content-center'>
                               Score                           
                        </div>
                        <div className = 'col-6 col-sm-12 text-white d-flex p-0'>
                            <div className = 'col d-flex p-3'> 
                                <div 
                                    className = 'rounded-circle bg-info score-number d-flex align-items-center justify-content-center'
                                >       {score}
                                </div>
                            </div>
                            
                        </div>
                    </div>
              
        </div>
    )
}
export default Leader;