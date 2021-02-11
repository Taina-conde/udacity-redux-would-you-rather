import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class LogInfo extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }
    render() {
        const { user } = this.props;
        if (user === undefined) {
            return null
        }
        return (
            <div>
                <p>Hello, {user.name} </p>
                <img
                    src= {user.avatar.avatarURL}
                    alt = {`Avatar of ${user.id}`}
                    style = {{height: "30px"}}
                />
                <button
                    onClick = {this.handleClick}
                >
                    Log out
                </button> 

            </div>

        )
    }
}
function mapStateToProps({users, authedUser}) {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(LogInfo);