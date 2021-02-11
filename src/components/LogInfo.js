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
            <div className = 'navbar-text container'>
                <div className = 'row'>
                    <div className = 'col'>
                        <p>Hello, {user.name} </p>
                    </div>
                    <div className = 'col'>
                        <img
                            src= {user.avatar.avatarURL}
                            alt = {`Avatar of ${user.id}`}
                            className = 'img-fluid login-img'
                        />
                    </div>
                    
                    <div className = 'col'>
                        <button
                            onClick = {this.handleClick}
                        >
                            Log out
                        </button>
                    </div> 
                </div>

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