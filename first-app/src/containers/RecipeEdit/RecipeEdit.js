import React, { Component } from 'react';
import RecipeForm from '../../components/RecipeForm'
import { getRecipeById, updateRecipe } from './RecipeEditActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeEdit } from '../Recipes/RecipesReducer'
import PropTypes from 'prop-types';

class RecipeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    static getDerivedStateFromProps(props, state) {
        if (props.recipeEdit && props.recipeEdit._id == state._id) {
            return null;
        }
        if (!props.recipeEdit) { return null; }


        return { ...props.recipeEdit };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.getRecipeById(id);
    }

    onFormSubmit = () => {
        const recipe = this.state;
        this.props.actions.updateRecipe(recipe);
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
        return (this.state ? <RecipeForm
            onFormSubmit={this.onFormSubmit}
            onCancelClick={this.onCancelClick}
            onInputChange={this.onInputChange}
            title={title}
            description={description}
            btnValue={'Save'}
        /> : <div>Loading...</div>);
    }
}

RecipeEdit.defaultProps = {
    recipeEdit: {}
};

RecipeEdit.propTypes = {
    recipeEdit: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stars: PropTypes.number,
    })
}

const mapStateToProps = state => ({
    recipeEdit: recipeEdit(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        updateRecipe: updateRecipe,
        getRecipeById: getRecipeById
    }, dispatch)
});

/*

this.props.actions.createRecipe(recipe) {
    state.dispatch(createRecipe(recipe));
}

*/

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit);