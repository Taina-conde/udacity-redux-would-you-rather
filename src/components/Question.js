import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component {
    render(){
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, {id}) {
    return {
        authedUser,
        question: questions[id]
    }
}
export default connect()(Question);