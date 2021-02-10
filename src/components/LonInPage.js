import React from 'react';
import { connect } from 'react-redux';
class LogInPage extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}
function mapStateToProps({users}) {
    return {
        users
  
    }
}
export default connect(mapStateToProps)(LogInPage);