import React, { Component } from 'react';
import RecipeForm from '../../components/RecipeForm';
import { createRecipe } from './RecipeNewActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RecipesNew extends Component {
    constructor(props) {
        super(props);
    }

    onFormSubmit = () => {
        const recipe = this.state;
        this.props.actions.createRecipe(recipe);
        const { history } = this.props;
        history.push('/rps');
    }

    onCancelClick = () => {
        const { history } = this.props;
        history.push('/rps');
    }
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { title, description } = this.state || {};
        return <RecipeForm
            onFormSubmit={this.onFormSubmit}
            onCancelClick={this.onCancelClick}
            onInputChange={this.onInputChange}
            title={title}
            description={description}
            btnValue='Create'
        />

    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ createRecipe: createRecipe }, dispatch)
});

/*

this.props.actions.createRecipe(recipe) {
    state.dispatch(createRecipe(recipe));
}

*/

export default connect(mapStateToProps, mapDispatchToProps)(RecipesNew);