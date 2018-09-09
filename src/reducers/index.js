import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { resultsReducer } from './resultsReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  results: resultsReducer,
})

export default rootReducer
