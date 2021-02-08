import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionPage extends React.Component {
    render() {
        const {questionId} = this.props.match.params;
        return (
            <div>
                <Question id = {questionId} parent = 'questionPage'/>
            </div>
        )
    }
}


export default connect()(QuestionPage);