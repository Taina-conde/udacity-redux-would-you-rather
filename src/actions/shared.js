import { getInitialData } from '../utils/api'
import { 
    receiveQuestions, 
    saveAnswer, 
    saveQuestionToQuestions 
} from './questions'
import { 
    receiveUsers, 
    saveUserAnwers, 
    saveQuestionToUsers 
} from './users'

import { 
    saveQuestionAnswer,
    saveQuestion
} from '../utils/api'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then (({questions, users}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                

            })
    }
}

export function handleSaveAnswer(info) {
    return (dispatch) => {
        dispatch(saveAnswer(info))
        dispatch(saveUserAnwers(info))
        return saveQuestionAnswer(info)
    }

}
export function handleSaveQuestion( {optionOneText, optionTwoText}) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(saveQuestionToQuestions(question))
                dispatch(saveQuestionToUsers(question))
            })
    }
}