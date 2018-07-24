import * as actionTypes from './RecipesActionTypes';

export const getAllRecipes = () => ({
    type: actionTypes.ALL_RECIPES
})

export const deleteRecipe = (id) => ({
    type: actionTypes.DELETE_RECIPE,
    payload: id
});

export const updateRecipe = (recipe) => ({
    type: actionTypes.UPDATE_RECIPE,
    payload: recipe
});

export const sortRecipesByStars = () => ({
    type: actionTypes.SORT_BY_STARS_DESC
});