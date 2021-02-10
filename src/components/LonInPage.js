import React from 'react';
import { connect } from 'react-redux';
import players from '../utils/avatars/players.png'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class LogInPage extends React.Component {
    state = {
        authedUser : null
    }
    render() {
        const {users} = this.props;
        console.log(users)
        console.log(Object.keys(users))
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
                        <DropdownButton id="dropdown-basic-button" title="Select user ...">
                            {Object.keys(users).map( user => (
                                <Dropdown.Item 
                                    as="button" 
                                    key = {users[user].id}

                                >
                                    <img 
                                        src = {users[user].avatar.avatarURL}
                                        alt = {`Avatar of ${users[user].name}`}
                                        style = {{height: '20px'}}
                                    />
                                    <p>{users[user].name}</p>
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                       
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