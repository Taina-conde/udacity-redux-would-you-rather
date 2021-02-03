import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    state = {
        questionsShown: "unanswered"
    }
    render() {
        const { questionsShown } = this.state;
        console.log(this.props);
        return (
            <div>
                <ul>
                    <li 
                        className= {questionsShown === "unanswered" ? "active" : ""}
                        
                    >
                        Unanswered
                    </li>
                    <li 
                        className= {questionsShown === "answered" ? "active" : ""}
                        
                    >
                        Answered
                    </li>
                </ul>
                <div>
                    {}

                </div>


            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);