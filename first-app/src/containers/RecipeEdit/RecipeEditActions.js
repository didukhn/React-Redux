import * as actionTypes from '../Recipes/RecipesActionTypes';
//ActionCreators
export const getRecipeById = (id) => ({
    type: actionTypes.GET_RECIPE_BY_ID,
    payload: id
});

export const updateRecipe = (recipe) => ({
    type: actionTypes.UPDATE_RECIPE,
    payload: recipe
});