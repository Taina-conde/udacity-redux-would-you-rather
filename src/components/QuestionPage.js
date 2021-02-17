import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';


class QuestionPage extends React.Component {
    render() {
        const {questionId} = this.props.match.params;
        return (
            <div className = 'central m-auto'>
                
                <Question id = {questionId} parent = 'questionPage'/>
            </div>
        )
    }
}

export default connect()(QuestionPage);