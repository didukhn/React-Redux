import * as actionTypes from '../Recipes/RecipesActionTypes';

export const createRecipe = (recipe) => ({
    type: actionTypes.CREATE_RECIPE,
    payload: recipe
});