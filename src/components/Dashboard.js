import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);