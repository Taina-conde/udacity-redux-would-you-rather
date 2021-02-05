import React from 'react';
import {connect} from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';

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
       dispatch(handleSaveAnswer({authedUser, qid, answer}))

    }

    render() {
        const { question, user } = this.props;
        const userAnswered = Object.keys(user.answers).includes(question.id);
        if (userAnswered === true) {
            const numOptionOneVotes = question.optionOne.votes.length;
            const numOptionTwoVotes = question.optionTwo.votes.length; 
            const totalVotes = numOptionOneVotes + numOptionTwoVotes;
            
            return (
                <div>
                    <h3>Results:</h3>
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
                        <input 
                            type="radio" 
                            id="optionOne"
                            name="option" 
                            value="optionOne"
                            onChange = {this.handleChange}
                        />
                        <label htmlFor="optionOne"> {question.optionOne.text}</label>
                        <br/>
                        <input 
                            type="radio" 
                            id="optionTwo" 
                            name="option" 
                            value="optionTwo"
                            onChange = {this.handleChange}
                        />
                        <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                        <br/>
                        <button type = 'submit'>Submit</button>
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
        qid : id
    }
}
export default connect(mapStateToProps)(QuestionContent);