import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import food from '../img/food.png';

const RecipeCard = ({ recipe, onClick, onSettingsClick, onCardClick, children }) => (
    <Card>
        <Image src={food} onClick={onCardClick} />
        <Card.Content>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Description>
                {recipe.description}
            </Card.Description>
            <Button type="button" onClick={onClick}
                basic color='olive'> Delete </Button>
            <Button type="button" icon='settings' onClick={onSettingsClick} />
            {children}
        </Card.Content>
    </Card >
);

export default RecipeCard;
