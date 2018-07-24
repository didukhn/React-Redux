import { call, put, takeLatest, all, } from 'redux-saga/effects';
import api from '../../api';
import * as actionTypes from './RecipesActionTypes';

function* getAllRecipes() {
    try {

        const recipes = yield call(api.recipeService.getAll);
        yield put({
            type: actionTypes.ALL_RECIPES_SUCCESS,
            payload: {
                allRecipes: recipes
            }
        });
    }
    catch (err) {
        yield put({
            type: actionTypes.ALL_RECIPES_FAILED,
        });
    }
}

function* deleteRecipe(action) {
    let idToDelete = action.payload;
    try {
        yield call(api.recipeService.delete, idToDelete);
        yield put({
            type: actionTypes.DELETE_RECIPE_SUCCESS,
            payload: idToDelete
        })
    }
    catch (err) {
        yield put({
            type: actionTypes.DELETE_RECIPE_FAILED
        })
    }
}

function* createRecipe(action) {
    const { payload } = action;
    try {
        let recipe = yield call(api.recipeService.create, payload);
        yield put({
            type: actionTypes.CREATE_RECIPE_SUCCESS,
            payload: recipe
        })

    } catch (err) {
        yield put({
            type: actionTypes.CREATE_RECIPE_FAILED
        })
    }
}

function* updateRecipe(action) {
    const recipe = action.payload;
    try {
        yield call(api.recipeService.update, recipe);
        yield put({
            type: actionTypes.UPDATE_RECIPE_SUCCESS,
            payload: recipe
        })
    }
    catch (err) {
        yield put({
            type: actionTypes.UPDATE_RECIPE_FAILED
        })
    }

}

function* getById(action) {
    const { payload } = action;
    try {
        const recipe = yield call(api.recipeService.getById, payload);
        yield put({
            type: actionTypes.GET_RECIPE_BY_ID_SUCCESS,
            payload: recipe
        })
    } catch (err) {
        yield put({
            type: actionTypes.GET_RECIPE_BY_ID_FAILED
        })
    }
}

export default function* recipesSaga() {
    yield all([
        takeLatest(actionTypes.ALL_RECIPES, getAllRecipes),
        takeLatest(actionTypes.DELETE_RECIPE, deleteRecipe),
        takeLatest(actionTypes.CREATE_RECIPE, createRecipe),
        takeLatest(actionTypes.UPDATE_RECIPE, updateRecipe),
        takeLatest(actionTypes.GET_RECIPE_BY_ID, getById)
    ])
}

