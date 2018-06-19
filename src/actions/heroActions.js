import * as types from './actionTypes';
import heroData from '../Data/DataApi';





export function loadHeores() {
    return function (dispatch) {
        return heroData.getAllHeroes().then(heroes => {
            dispatch(loadHeroesSuccess(heroes));
        }).catch(error => {
            throw (error);
        })
    };
}
export function loadHeroesSuccess(heroes) {
    return { type: types.LOAD_HEROES_SUCCESS, heroes };
}


export function saveNewHero(hero) {
    return function (dispatch, getState) {
        return heroData.saveHero(hero).then(savedHero => {
                dispatch(createHeroSuccess(savedHero));
        }).catch(error => {
            throw (error);
        })
    };

}
export function createHeroSuccess(hero) {
    return { type: types.CREATE_HERO_SUCCESS, hero };
}



export function updateHero(hero) {
    return function (dispatch, getState) {
        return heroData.updateHero(hero).then(updateHero => {
            dispatch(updateHeroSuccess(updateHero))

        }).catch(error => {
            throw (error);
        })
    };

}
export function updateHeroSuccess(heroes) {
    return { type: types.UPDATE_HERO_SUCCESS, heroes };

}



export function deleteHero(hero) {
    return function (dispatch) {
        return heroData.deleteHero(hero).then(heroes => {
            dispatch(deleteHeroSuccess(heroes));
        }).catch(error => {
            throw (error);
        })
    };
}
export function deleteHeroSuccess(heroes) {
    return { type: types.DELETE_HERO_SUCCESS, heroes };
}
