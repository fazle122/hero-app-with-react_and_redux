import * as types from './actionTypes';
import heroData from '../Data/DataApi';




export function loadTopHeores() {
    return function (dispatch) {
        return heroData.getTopHeroes().then(topheroes => {
            dispatch(loadTopHeroesSuccess(topheroes));
        }).catch(error => {
            throw (error);
        })
    };
}
export function loadTopHeroesSuccess(heroes) {
    return { type: types.LOAD_HEROES_SUCCESS, heroes };
}