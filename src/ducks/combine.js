import {combineReducers} from 'redux';
import HomeReducer from './homeReducer';
import BlockReducer from './blocks';

const rootReducer = combineReducers({
    home: HomeReducer,
    blocks: BlockReducer
});

export default rootReducer;