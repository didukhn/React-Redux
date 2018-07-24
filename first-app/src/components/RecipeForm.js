import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';


const RecipeForm = ({ onFormSubmit, onCancelClick, onInputChange, btnValue, title = '', description = '' }) => (
    <Segment >
        <Form onSubmit={onFormSubmit}>
            <Form.Group widths='equal' >
                <Form.Input fluid label='Title' name='title' placeholder='Title' onChange={onInputChange} value={title} />
                <Form.Input fluid label='Description' name='description' placeholder='Description' onChange={onInputChange} value={description} />
            </Form.Group>
            <Button negative onClick={onCancelClick}>Cancel</Button>
            <Button positive >{btnValue}</Button>
        </Form>
    </Segment >
);
export default RecipeForm;