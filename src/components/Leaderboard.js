import React from 'react';
import {connect} from 'react-redux';
import Leader from './Leader';

class Leaderboard extends React.Component {
    render() {
        const { users, usersIds} = this.props;
        const usersAndScoresArr = usersIds.map( id => {
            const numQuestionsAnswered = Object.keys(users[id].answers).length;
            const numQuestionsAsked = users[id].questions.length;
            const sum = numQuestionsAnswered + numQuestionsAsked;
            const user = users[id]
            return {
                user,
                sum,
            }
        })
        console.log(usersAndScoresArr)


        return (
            <div>
                <ul>
                    {usersAndScoresArr.map( userScorePair => (
                        <li key = {userScorePair.user.id}>
                            <Leader/>
                           

                        </li>
                    ))}
                </ul>
                <div>
                    <div>
                        <img
                            src = ''
                            alt = ""
                        />
                    </div>
                    <div>
                        <h1>User name</h1>
                    </div>
                    <div>
                        Answered questions:
                    </div>
                    <div>
                        Created questions: 
                    </div>
                    <div>
                        Score
                    </div>
                </div>

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