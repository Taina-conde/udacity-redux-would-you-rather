import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionPage extends React.Component {
    render() {
        const {question, id} = this.props;
        return (
            <div>
                <Question id = {id} parent = 'questionPage'/>
            </div>
        )
    }
}
function mapStateToProps({questions}, props) {
    const { questionId } = props.match.params
    return {
        question : questions[questionId],
        id : questionId,

    }

}

export default connect(mapStateToProps)(QuestionPage);