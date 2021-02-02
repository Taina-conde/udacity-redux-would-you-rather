import  usersReducer  from './users'
import  questionsReducer  from './questions'
import  authedUserReducer  from './authedUser'
import  {combineReducers}  from 'redux'

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    authedUser : authedUserReducer
})