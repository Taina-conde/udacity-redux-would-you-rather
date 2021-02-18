import React from 'react';
import {connect} from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';
import { withRouter } from 'react-router-dom';

class QuestionContent extends React.Component {

    state = {
        answer: ""
    }
    handleChange = (e) => {
        this.setState({
            answer : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
       const {dispatch, authedUser, qid } = this.props;
       const { answer } = this.state;
       dispatch(handleSaveAnswer({authedUser, qid, answer}));
       this.props.history.push('/');


    }

    render() {
        const { question, user } = this.props;
        const userAnswered = Object.keys(user.answers).includes(question.id);
        if (userAnswered === true) {
            const numOptionOneVotes = question.optionOne.votes.length;
            const numOptionTwoVotes = question.optionTwo.votes.length; 
            const totalVotes = numOptionOneVotes + numOptionTwoVotes;
            
            return (
                <div className = 'd-flex flex-column'>
                    <div>
                        <h5>Results:</h5>
                    </div>
                    <div>
                        <div>
                            <div>{`Would you rather ${question.optionOne.text}?`}</div>
                            <div> {/** TODO: percentage bar of votes */}</div>
                            <div>{ `${numOptionOneVotes} out of ${totalVotes} votes`} </div>
                        </div>
                        <div>
                            <div>{`Would you rather ${question.optionTwo.text}?`}</div>
                            <div> {/** TODO: percentage bar of votes */}</div>
                            <div>{ `${numOptionTwoVotes} out of ${totalVotes} votes`} </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h3>Whould you rather...</h3>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        
                            <div className = 'form-check'>
                                <input 
                                    className = 'form-check-input'
                                    type="radio" 
                                    id="optionOne"
                                    name="option" 
                                    value="optionOne"
                                    onChange = {this.handleChange}
                                />
                                <label 
                                    className = 'form-check-label'
                                    htmlFor="optionOne"
                                > 
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className = 'form-check'>
                                <input 
                                    className = 'form-check-input'
                                    type="radio" 
                                    id="optionTwo" 
                                    name="option" 
                                    value="optionTwo"
                                    onChange = {this.handleChange}
                                />
                                <label 
                                    className = 'form-check-label'
                                    htmlFor="optionTwo"
                                >
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <button 
                                className = 'btn btn-primary'
                                type = 'submit' 
                                disabled = {this.state.answer === ""}
                            >
                                    Submit
                            </button>
                        
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps({questions, users, authedUser}, { id }) {
    return {
        question: questions[id],
        user: users[authedUser],
        qid : id,
        authedUser,
    }
}
export default withRouter(connect(mapStateToProps)(QuestionContent));