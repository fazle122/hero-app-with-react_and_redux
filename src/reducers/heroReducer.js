import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function heroReducer(state = initialState.heroes, action) {
    switch (action.type) {
        
        case types.LOAD_HEROES_SUCCESS:
            return action.heroes;

        case types.CREATE_HERO_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.hero)
            ];

        case types.UPDATE_HERO_SUCCESS:
            return action.heroes;
        // return [
        //     ...state.filter(hero => hero.Id !== action.hero.Id),
        //     Object.assign({}, action.hero),

        // ];
        case types.DELETE_HERO_SUCCESS: ;
            return action.heroes;
        default:
            return state;
    }
}