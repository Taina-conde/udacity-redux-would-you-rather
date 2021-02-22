import React from 'react';
import {connect} from 'react-redux';
import Leader from './Leader';

class Leaderboard extends React.Component {
    render() {
        const { users, usersIds} = this.props;
        const usersAndScoresArr = usersIds.map( id => {
            const numQuestionsAnswered = Object.keys(users[id].answers).length;
            const numQuestionsAsked = users[id].questions.length;
            const score = numQuestionsAnswered + numQuestionsAsked;
            const user = users[id]
            return {
                user,
                score,
            }
        })
        
        usersAndScoresArr.sort( (a,b) => (b.score - a.score))
        


        return (
            <div className = 'central m-auto'>
                <ul className = 'leaderboard-list'>
                    {usersAndScoresArr.map( (userScorePair, index) => (
                        <li key = {userScorePair.user.id}>
                            <Leader
                                ranking = {index}
                                user = {userScorePair.user}
                                score = {userScorePair.score}
                            />
                           

                        </li>
                    ))}
                </ul>
                

            </div>
        )
    }
}
function mapStateToProps({users}) {
    return {
        users,
        usersIds: Object.keys(users)
    }
}
export default connect(mapStateToProps)(Leaderboard);