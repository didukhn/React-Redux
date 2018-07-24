import React from 'react'
import { Popup, Card, Rating, Image } from 'semantic-ui-react'

const RecipeRating = ({ rating, onRate }) => (
    <Rating icon='star' maxRating={5} rating={rating || 0} onRate={onRate} />
)

export default RecipeRating;