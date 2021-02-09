import React from 'react';
import { connect } from 'react-redux';


class NewQuestion extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleChangeInputs = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

    }
    render() {
        return ( 
            <div>
                <div>
                    <h1>Create new question</h1>
                </div>
                <div>
                    <form onSubmit= {this.handleSubmit}>
                        <p> Complete the question:</p>
                        <h2>Would you rather...</h2>
                        <input 
                            type= 'text' 
                            placeholder= 'Enter option one text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionOneText'
                        />
                        <br/>
                        <p>OR</p>
                        <br/>
                        <input
                            type= 'text'
                            placeholder = 'Enter option two text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionTwoText'
                        />
                        <button 
                            type = 'submit' 
                            disabled = {this.state.optionOneText && this.state.optionTwoText ? false : true }
                            
                            
                        >
                                Submit
                        </button>
                        
                    </form>
                    
                    
                </div>

            </div>
        )
    }
}
export default connect()(NewQuestion);