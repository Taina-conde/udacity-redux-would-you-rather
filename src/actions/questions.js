

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION_TO_QUESTIONS = 'SAVE_QUESTION_TO_QUESTIONS'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
} 

export function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}
export function saveQuestionToQuestions(question) {
    return {
        type: SAVE_QUESTION_TO_QUESTIONS,
        question
    }
}
