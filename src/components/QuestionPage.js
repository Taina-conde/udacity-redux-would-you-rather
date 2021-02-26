import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';


const QuestionPage = ({
    match: {
        params: {questionId},
    },
}) => (
    <div className = 'central m-auto'>
                
        <Question id = {questionId} parent = 'questionPage'/>
    </div>
);
    

export default connect()(QuestionPage);