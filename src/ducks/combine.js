import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './homeReducer';
import BlockReducer from './blocks';

const rootReducer = combineReducers({
    form: formReducer,
    home: HomeReducer,
    blocks: BlockReducer
});

export default rootReducer;