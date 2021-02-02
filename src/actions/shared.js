import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'


// TODO: authentication process
const AUTHED_ID = "" // Coming from sign in 


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