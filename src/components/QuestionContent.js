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
       this.props.history.push(`/questions/${qid}`);


    }

    render() {
        const { question, user } = this.props;
        const userAnswered = Object.keys(user.answers).includes(question.id);
        console.log(question)
        console.log(user)
        if (userAnswered === true) {
            const numOptionOneVotes = question.optionOne.votes.length;
            const numOptionTwoVotes = question.optionTwo.votes.length; 
            const totalVotes = numOptionOneVotes + numOptionTwoVotes;
            const optionOnePercentage = (numOptionOneVotes/totalVotes)*100;
            const optionTwoPercentage = (numOptionTwoVotes/totalVotes)* 100;
            return (
                <div className = 'd-flex flex-column answered-content'>
                    <div>
                        <h3>Results:</h3>
                    </div>
                    <div className = 'pt-2'>
                        <div 
                            className = {
                                question.optionOne.votes.includes(user.id)
                                    ? "option-voted mb-4"
                                    : "option-not-voted mb-4"
                                }
                        >
                            <div 
                                className = 'your-vote-symbol bg-warning rounded-circle'
                                style = {{display: 
                                    question.optionOne.votes.includes(user.id)
                                        ? "inline-block"
                                        : "none" 
                                }}

                            >
                                Your vote
                            </div>
                            <div>{`Would you rather ${question.optionOne.text}?`}</div>
                            <div className = 'progress mt-2 mb-2' > 
                                <div 
                                    className = 'progress-bar progress-bar-striped bg-info'
                                    role = 'progressbar'
                                    style = {{width: `${optionOnePercentage}%`}}
                                    aria-valuenow = {optionOnePercentage}
                                    aria-valuemin = "0"
                                    aria-valuemax = "100"
                                    >
                                        {`${optionOnePercentage}%`}
                                </div>
                            </div>
                            <div className = 'text-center font-weight-bold'>{ `${numOptionOneVotes} out of ${totalVotes} votes`} </div>
                        </div>
                        <div
                            className = {
                                question.optionTwo.votes.includes(user.id)
                                    ? "option-voted"
                                    : "option-not-voted"
                                }
                        >
                            <div 
                                className = 'your-vote-symbol bg-warning rounded-circle'
                                style = {{display: 
                                    question.optionTwo.votes.includes(user.id)
                                        ? "inline-block"
                                        : "none" 
                                }}

                            >
                                Your vote
                            </div>
                            <div>{`Would you rather ${question.optionTwo.text}?`}</div>
                            <div className = 'progress mt-2 mb-2'> 
                                <div 
                                    className = 'progress-bar progress-bar-striped bg-info'
                                    role = 'progressbar'
                                    style = {{width: `${optionTwoPercentage}%`}}
                                    aria-valuenow = {optionTwoPercentage}
                                    aria-valuemin = "0"
                                    aria-valuemax = "100"
                                >
                                        {`${optionTwoPercentage}%`}
                                </div>
                            </div>
                            <div className= 'text-center font-weight-bold'>{ `${numOptionTwoVotes} out of ${totalVotes} votes`} </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className = 'unanswered-content'>
                <h3>Whould you rather...</h3>
                <div className = 'pt-3'>
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
                            <div className = 'text-right pt-3'>
                                <button 
                                    className = 'btn btn-primary'
                                    type = 'submit' 
                                    disabled = {this.state.answer === ""}
                                >
                                        Submit
                                </button>
                            </div>
                        
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