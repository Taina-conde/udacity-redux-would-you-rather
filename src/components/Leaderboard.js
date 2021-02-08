import React from 'react';
import {connect} from 'react-redux';

class Leaderboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <img></img>
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
        users
    }
}
export default connect(mapStateToProps)(Leaderboard);