import React from 'react';

function Leader(props) {
    const { user, score, ranking } = props;
    const numQuestionsAnswered = Object.keys(user.answers).length;
    const numQuestionsAsked = user.questions.length;
    let rankingClass = '';
    switch (ranking) {
        case 1:
            rankingClass = 'first-place';
            break
        case 2:
            rankingClass = 'second-place';
            break
        case 3:
            rankingClass = 'third-place';
            break
        default :
            rankingClass = 'not-in-podium';
    }
    return (
        <div className = 'rounded border mb-4'>
            <div className = 'd-sm-flex p-4'>
            
                    <div className = 'col-sm-3 user-avatar'>
                        <div className = {rankingClass}>

                        </div>
                        <div className = 'img-avatar rounded-circle'>
                            <img
                                className = 'img-fluid rounded-circle avatar'
                                src = {user.avatar.avatarURL}
                                alt = {`Avatar of ${user.id}`}
                                
                            />
                        </div>
                    </div>
                    <div className= 'col-sm-6 d-flex flex-column justify-content-between p-2'>
                        <div >
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
                    
                    <div className = 'col-sm-3 d-flex flex-sm-column border p-0 score-box rounded m-2'>
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
        </div>
    )
}
export default Leader;