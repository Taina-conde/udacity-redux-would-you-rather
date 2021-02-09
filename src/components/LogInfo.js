import React from 'react';
import { connect } from 'react-redux';

class LogInfo extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, </p>
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