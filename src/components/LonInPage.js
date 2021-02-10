import React from 'react';
import { connect } from 'react-redux';
import players from '../utils/avatars/players.png'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {setAuthedUser} from '../actions/authedUser'

class LogInPage extends React.Component {
    state = {
        value : ""
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

    }
    render() {
        const {users} = this.props;
        
        return (
            <div>
                <div>
                    <p>Let's play Would You Rather? Before we begin, sign in to continue.</p>
                </div>
                <div>
                    <img
                        src = {players}
                        alt = 'players'
                    />
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label>Sign in</label>
                        <DropdownButton 
                            id="dropdown-basic-button" 
                            title={this.state.value === "" 
                                ? "Select user ..." 
                                : 
                                <div>
                                    <img 
                                        src ={users[this.state.value].avatar.avatarURL} 
                                        alt = {`Avatar of ${this.state.value}`}
                                        style = {{height:'20px'}}
                                        /> 
                                    <p>{this.state.value}</p>
                                </div>}
                            onSelect = {(e) => this.handleSelect(e)}
                        >
                            {Object.keys(users).map( user => (
                                <Dropdown.Item 
                                    
                                    key = {users[user].id}
                                    eventKey= {users[user].id}
                                    

                                >
                                    <img 
                                        src = {users[user].avatar.avatarURL}
                                        alt = {`Avatar of ${users[user].name}`}
                                        style = {{height: '20px'}}
                                    />
                                    <p>{users[user].name}</p>
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                       
                        <button type = 'submit' disabled = {this.state.value === ""}>Sign In</button>
                    </form>
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