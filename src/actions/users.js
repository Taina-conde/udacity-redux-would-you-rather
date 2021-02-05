import {saveQuestionAnswer} from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWERS = 'SAVE_USER_ANSWERS'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnwers({authedUser, qid, answer}) {
    return {
        type: SAVE_USER_ANSWERS,
        authedUser,
        qid,
        answer
    }
}