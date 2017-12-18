import { combineReducers } from 'redux';
import HomeReducer from './components/Home/homeReducer'

const rootReducer =  combineReducers({
    home: HomeReducer
});

export default rootReducer;