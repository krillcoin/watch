import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './homeReducer';
import BlockReducer from './blocks';
import KrillReducer from './krill';

const rootReducer = combineReducers({
    form: formReducer,
    home: HomeReducer,
    krill: KrillReducer,
    blocks: BlockReducer
});

export default rootReducer;