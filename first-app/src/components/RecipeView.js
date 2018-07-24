import React from 'react'
import { Item } from 'semantic-ui-react'
import food from '../img/food.png';

const RecipeView = ({ recipe }) => <Item.Group items={[
    {
        childKey: 0,
        image: food,
        header: recipe.title,
        description: recipe.description
    }
]} />

export default RecipeView;