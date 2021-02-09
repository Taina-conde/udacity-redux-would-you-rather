import React from 'react';
import { connect } from 'react-redux';


class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleChangeInputs = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return ( 
            <div>
                <div>
                    <h1>Create new question</h1>
                </div>
                <div>
                    <form>
                        <p> Complete the question:</p>
                        <h2>Would you rather...</h2>
                        <input 
                            type= 'text' 
                            placeholder= 'Enter option one text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionOne'
                        />
                        <br/>
                        <p>OR</p>
                        <br/>
                        <input
                            type= 'text'
                            placeholder = 'Enter option two text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionTwo'
                        />
                        <button 
                            type = 'submit' 
                            disabled = {this.state.optionOne && this.state.optionTwo ? false : true }
                            
                            
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