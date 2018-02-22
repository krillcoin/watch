import {combineReducers} from 'redux';
import HomeReducer from './homeReducer'

const rootReducer = combineReducers({
    home: HomeReducer
});

export default rootReducer;