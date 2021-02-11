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
            <div className = 'navbar-text justify-content-end'>
                
                <span>
                    Hello, {user.name}
                </span>
                <img
                    src= {user.avatar.avatarURL}
                    alt = {`Avatar of ${user.id}`}
                    className = 'img-fluid login-img rounded-circle mr-4 ml-2'
                />
                <button
                    onClick = {this.handleClick}
                    className = "btn btn-outline-danger btn-sm"
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