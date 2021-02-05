import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionPage extends React.Component {
    render() {
        return (
            <div>
                <Question
                    parent = 'questionPage'
                />
            </div>
        )
    }
}

export default connect()(QuestionPage);