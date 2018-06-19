import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.topHeroes, action) {
    switch (action.type) {
        case types.LOAD_HEROES_SUCCESS:
            return action.heroes;
        default:
            return state;
    }
}