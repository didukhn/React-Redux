import React from 'react';
import { Button, Form, Segment, Image } from 'semantic-ui-react';
import food from '../img/food.png';


const RecipeForm = ({ onFormSubmit, onCancelClick, onInputChange, btnValue, title = '', description = '' }) => (
    <Segment className={'card-form'}>
        <Form onSubmit={onFormSubmit}>
            <Image src={food} width={200} />
            <Form.Group widths='equal' >
                <Form.Input fluid label='Title' name='title' placeholder='Title' onChange={onInputChange} value={title} />
                <Form.Input fluid label='Description' name='description' placeholder='Description' onChange={onInputChange} value={description} />
            </Form.Group>
            <Button positive >{btnValue}</Button>
            <Button negative onClick={onCancelClick}>Cancel</Button>
        </Form>
    </Segment >
);
export default RecipeForm;