import { combineReducers } from 'redux';

import MangoReducer from './reducer_mango';

const rootReducer = combineReducers({
	mangoStore: MangoReducer
})

export default rootReducer;