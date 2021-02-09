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
import { setAuthedUser } from './authedUser'
import { 
    saveQuestionAnswer,
    saveQuestion
} from '../utils/api'



// TODO: authentication process
const AUTHED_ID = 'sarahedo' // Coming from sign in 


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then (({questions, users}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))

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
export function handleSaveQuestion(question) {
    return (dispatch) => {
        dispatch(saveQuestionToQuestions(question))
        dispatch(saveQuestionToUsers(question))
        return saveQuestion(question)
    }
}