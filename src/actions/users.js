export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWERS = 'SAVE_USER_ANSWERS'
export const SAVE_QUESTION_TO_USERS = 'SAVE_QUESTION_TO_USERS'

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
export function saveQuestionToUsers(question) {
    return {
        type: SAVE_QUESTION_TO_USERS,
        question
    }
}