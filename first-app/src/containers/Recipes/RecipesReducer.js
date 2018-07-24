import * as actionTypes from './RecipesActionTypes';
import { combineReducers } from '../../../node_modules/redux';
import { startsComparator } from './RecipesComparators';


const initialState = {
    allRecipes: [],
    activeRecipe: null,
    isLoading: false
};

const allRecipesReducer = (state = initialState.allRecipes, action) => {
    switch (action.type) {

        case actionTypes.ALL_RECIPES_SUCCESS:
            let newState = [...action.payload.allRecipes];
            return newState;
        case actionTypes.ALL_RECIPES_FAILED:
            return state;

        case actionTypes.DELETE_RECIPE_SUCCESS:
            let idToDelete = action.payload;
            return state.filter(x => x._id != idToDelete);
        case actionTypes.DELETE_RECIPE_FAILED:
            return state;

        case actionTypes.CREATE_RECIPE_SUCCESS:
            return [...state, action.payload];
        case actionTypes.CREATE_RECIPE_FAILED:
            return state;

        case actionTypes.UPDATE_RECIPE_SUCCESS:
            let updatedRecipes = state.reduce((arr, recipe) => {
                if (recipe._id == action.payload._id) {
                    recipe.title = action.payload.title;
                    recipe.description = action.payload.description;
                    recipe.stars = action.payload.stars;
                }

                return [...arr, recipe];
            }, []);
            return updatedRecipes;
        case actionTypes.UPDATE_RECIPE_FAILED:
            return state;

        case actionTypes.SORT_BY_STARS_DESC:
            const copyState = [...state];
            return copyState.sort(startsComparator);

        default:
            return state;
    }
}

const recipeEditReducer = (state = initialState.activeRecipe, action) => {
    switch (action.type) {
        case actionTypes.GET_RECIPE_BY_ID_SUCCESS:
            return action.payload;
        case actionTypes.GET_RECIPE_BY_ID_FAILED:
            return state;
        case actionTypes.GET_RECIPE_BY_ID:
            return null;

        default:
            return state;
    }
}

const isLoadingReducer = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case actionTypes.GET_RECIPE_BY_ID:
        case actionTypes.UPDATE_RECIPE:
        case actionTypes.ALL_RECIPES:
        case actionTypes.CREATE_RECIPE:
        case actionTypes.DELETE_RECIPE:
            return true;
        case actionTypes.GET_RECIPE_BY_ID_FAILED:
        case actionTypes.GET_RECIPE_BY_ID_SUCCESS:
        case actionTypes.UPDATE_RECIPE_SUCCESS:
        case actionTypes.ALL_RECIPES_SUCCESS:
        case actionTypes.CREATE_RECIPE_SUCCESS:
        case actionTypes.DELETE_RECIPE_SUCCESS:
        case actionTypes.UPDATE_RECIPE_FAILED:
        case actionTypes.ALL_RECIPES_FAILED:
        case actionTypes.CREATE_RECIPE_FAILED:
        case actionTypes.DELETE_RECIPE_FAILED:
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    all: allRecipesReducer,
    activeRecipe: recipeEditReducer,
    isLoading: isLoadingReducer
});

export const allRecipes = (state) => {
    return state.recipes.all;
}

export const isLoading = (state) => {
    return state.recipes.isLoading;
}

export const recipeEdit = (state) => {
    return state.recipes.activeRecipe;
}
