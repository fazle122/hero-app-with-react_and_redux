import {combineReducers} from 'redux';
import heroes from './heroReducer';
import topHeroes from './dashboardReducer';
import messages from './messageReducer';

const rootReducer = combineReducers({
    
    heroesReducer:heroes,
})

export default rootReducer;