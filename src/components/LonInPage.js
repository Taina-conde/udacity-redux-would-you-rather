import React from 'react';
import { connect } from 'react-redux';
import players from '../utils/avatars/players.png'

class LogInPage extends React.Component {
    render() {
        const {users} = this.props;
        return (
            <div>
                <div>
                    <p>Let's play Would You Rather? Before we begin, sign in to continue.</p>
                </div>
                <div>
                    <img
                        src = {players}
                        alt = 'players'
                    />
                </div>
                <div>
                    <form>
                        <label>Sign in</label>
                        <select>
                            {Object.keys(users).map(user => (
                                <option key = {user}>
                                    <img 
                                        src = {users[user].avatar.avatarURL}
                                        alt = {`Avatar of ${users[user].name}`}
                                    />
                                    <p>{users[user].name}</p>
                                </option>
                            ))}
                        </select>
                        <button>Sign In</button>
                    </form>
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
export default connect(mapStateToProps)(LogInPage);