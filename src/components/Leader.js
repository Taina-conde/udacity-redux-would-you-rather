import React from 'react';

function Leader(props) {
    const { user, score } = props;
    const numQuestionsAnswered = Object.keys(user.answers).length;
    const numQuestionsAsked = user.questions.length;
    return (
        <div>
            
                    <div>
                        <img
                            src = {user.avatar.avatarURL}
                            alt = {`Avatar of ${user.id}`}
                            style = {{height: '100px'}}
                        />
                    </div>
                    <div>
                        <h1>{user.name}</h1>
                    </div>
                    <div>
                        Answered questions: <span>{numQuestionsAnswered}</span>
                    </div>
                    <div>
                        Created questions: <span>{numQuestionsAsked}</span>
                    </div>
                    <div>
                        <div>Score</div>
                        <div>{score}</div>
                    </div>
                
        </div>
    )
}
export default Leader;