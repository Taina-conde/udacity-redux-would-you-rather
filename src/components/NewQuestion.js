import React from 'react';
import { connect} from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';


class NewQuestion extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }
    handleChangeInputs = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;
        dispatch(handleSaveQuestion({optionOneText, optionTwoText}))
        this.setState({
            toHome: true
        })


    }
    render() {
        if (this.state.toHome === true) {
            return <Redirect to= '/'/>
        }
        return ( 
            <div className = 'card mt-4'>
                <div className = 'card-header text-center'>
                    <h1>Create new question</h1>
                </div>
                <div className = 'card-body'>
                    <form onSubmit= {this.handleSubmit}>
                        <p> Complete the question:</p>
                        <h4>Would you rather...</h4>
                        <input 
                            className = 'form-control mt-4'
                            type= 'text' 
                            placeholder= 'Enter option one text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionOneText'
                        />
                        
                        <div className = 'font-weight-bold text-center d-flex mb-2 mt-2'>
                            <div className = 'col-5'><hr/></div>
                            <div className = 'col-2 p-0'>OR</div>
                            <div className = 'col-5'><hr/></div>
                        </div>
                        
                        <input
                            className = 'form-control'
                            type= 'text'
                            placeholder = 'Enter option two text here'
                            onChange = {this.handleChangeInputs}
                            name = 'optionTwoText'
                        />
                        <button 
                            className = 'btn btn-success mt-4'
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