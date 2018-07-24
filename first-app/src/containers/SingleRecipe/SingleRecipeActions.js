import * as actionTypes from '../Recipes/RecipesActionTypes';

export const getRecipeById = (id) => ({
    type: actionTypes.GET_RECIPE_BY_ID,
    payload: id
});