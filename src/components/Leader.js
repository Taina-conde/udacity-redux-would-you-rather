import React from 'react';

function Leader(props) {
    const { user, score, ranking } = props;
    const numQuestionsAnswered = Object.keys(user.answers).length;
    const numQuestionsAsked = user.questions.length;
    let rankingClass = '';
    switch (ranking) {
        case 0:
            rankingClass = 'first-place';
            break
        case 1:
            rankingClass = 'second-place';
            break
        case 2:
            rankingClass = 'third-place';
            break
        default :
            rankingClass = 'not-in-podium';
    }
    return (
        <div className = 'rounded border mb-4 p-3 p-sm-1'>
            <div className = {rankingClass + ' d-inline'}>
                {ranking + 1}
            </div>
            <div className = 'd-sm-flex float-none'>
                    
                    <div className = 'col-sm-3 user-avatar'>
                        
                        <div className = 'img-avatar rounded-circle'>
                            <img
                                className = 'img-fluid rounded-circle avatar'
                                src = {user.avatar.avatarURL}
                                alt = {`Avatar of ${user.id}`}
                                
                            />
                        </div>
                    </div>
                    <div className= 'col-sm-6 d-flex flex-column justify-content-between p-2'>
                        <div>
                            <h3>{user.name}</h3>
                        </div>
                        <div className = 'border-bottom d-flex justify-content-between pb-3'>
                            <div>Answered questions: </div>
                            <div className = 'font-weight-bold'>{numQuestionsAnswered}</div>
                        </div>
                        <div className = 'd-flex justify-content-between pb-3' >
                            <div>Created questions:</div> 
                            <div className = 'font-weight-bold'>{numQuestionsAsked}</div>
                        </div>
                    </div>
                    
                    <div className = 'col-sm-3 m-auto p-3'>
                        <div className = "score-box border rounded d-flex flex-sm-column">
                            <div className = 'col-6 col-sm-12 bg-light score-text d-flex align-items-center justify-content-center'>
                                Score                           
                            </div>
                            <div className = 'col-6 col-sm-12 text-white text-center p-3'>
                                    
                                    <div className = 'score-number bg-info text-center'>       
                                        <div>{score}</div>
                                    </div>
                                   
                                
                            </div>
                        </div>
                    </div>
            </div> 
        </div>
    )
}
export default Leader;