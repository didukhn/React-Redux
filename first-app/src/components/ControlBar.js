import React from 'react';
import { Form, Segment, Button, Icon } from 'semantic-ui-react';

const ControlBar = ({ onSearchChange, onCreateClick, onSortClick }) => (
    <Segment >
        <Form.Input fluid name='search' placeholder='Search...' onChange={onSearchChange} />
        <Button type="button" onClick={onCreateClick}> < Icon name='add' />Create recipe</Button>
        <Button type="button" onClick={onSortClick}> < Icon name='arrow down' />Sort by stars</Button>
    </Segment >
);


export default ControlBar;