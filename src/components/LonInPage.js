import React from 'react';
import { connect } from 'react-redux';
import players from '../utils/avatars/players.png'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup'
import {setAuthedUser} from '../actions/authedUser'
import { Redirect } from 'react-router-dom';

class LogInPage extends React.Component {
    state = {
        value : "",
        toHome: false
    }
    handleSelect = (event) => {
        console.log(event)
        this.setState({
            value: event
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        const {dispatch} = this.props;
        const id = this.state.value;
        dispatch(setAuthedUser(id))
        this.setState({
            toHome : true
        })


    }
    render() {
        const {users} = this.props;
        if (this.state.toHome === true) {
            return <Redirect to = '/'/>
        }
        return (
            <div className = 'card'>
                <div className = 'card-header text-center'>
                    <h4 className = 'card-title'>Would you rather?</h4>
                    <div className = 'card-text'>Let's play Would You Rather? Before we begin, sign in to continue.</div>
                </div>
                <div className = 'card-body' >

                <div className = 'card-content p-5'>
                    <div className = 'text-center'>
                        <img
                            className = 'img-fluid'
                            style = {{width: '50%'}}
                            src = {players}
                            alt = 'players'
                        />
                    </div>
                    <div className = 'm-2'>
                        <form  className = 'login-form' onSubmit = {this.handleSubmit}>
                            <div className = 'form-group d-flex flex-column'>
                                <h3 className = 'card-title p-3'>Sign in</h3>
                                <InputGroup className = 'justify-content-center' size = 'lg'>
                                
                                    <InputGroup.Prepend >
                                        <InputGroup.Text  >
                                            {this.state.value === "" 
                                                ? "Select user ..." 
                                                : 
                                                <div className = 'd-flex flex-row align-items-center'>
                                                    <img 
                                                        src ={users[this.state.value].avatar.avatarURL} 
                                                        alt = {`Avatar of ${this.state.value}`}
                                                        
                                                        className = 'login-img mr-2'
                                                        /> 
                                                    <div>{this.state.value}</div>
                                                </div>
                                            }
                                        </InputGroup.Text>
                                    
                                    </InputGroup.Prepend>
                                        
                                    <DropdownButton 
                                        as = {InputGroup.Append}
                                        id="dropdown-basic-button" 
                                        title = ""
                                        variant = 'outline-secondary'
                                        onSelect = {(e) => this.handleSelect(e)}
                                    >
                                        {Object.keys(users).map( user => (
                                            <Dropdown.Item 
                                                className = 'd-flex flex-row align-items-center'
                                                key = {users[user].id}
                                                eventKey= {users[user].id}
                                                

                                            >
                                                <img 
                                                    src = {users[user].avatar.avatarURL}
                                                    alt = {`Avatar of ${users[user].name}`}
                                                
                                                    className = 'login-img mr-2'
                                                />
                                                <div>{users[user].name}</div>
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton> 
                                    
                                </InputGroup>
                                
                                
                            
                            
                                <button 
                                    className = 'btn btn-lg btn-primary mt-3'
                                    type = 'submit' 
                                    disabled = {this.state.value === ""}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>  
                </div>                             
            </div>
            
        )
    }
}
function mapStateToProps({users}) {
    return {
        users
  
    }
}
export default connect(mapStateToProps)(LogInPage);