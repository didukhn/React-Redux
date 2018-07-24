import React, { Component, Fragment } from 'react';
import RecipeView from '../../components/RecipeView'
import { getRecipeById } from './SingleRecipeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const singleRecipe = (state) => {
    return state.recipes.activeRecipe;
}

class SingleRecipe extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.actions.getRecipeById(id);

    }

    goBack = () => {
        const { history } = this.props;
        history.push('/rps');
    }

    render() {
        return (
            <Fragment>
                {this.props.singleRecipe ?
                    <RecipeView recipe={this.props.singleRecipe} /> :
                    <div>Loading...</div>}
                <Button basic color='blue' onClick={this.goBack}>Back</Button>
            </Fragment>
        );
    }
}

SingleRecipe.defaultProps = {
    singleRecipe: {}
};

SingleRecipe.propTypes = {
    singleRecipe: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stars: PropTypes.number,
    })
}

const mapStateToProps = state => ({
    singleRecipe: singleRecipe(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getRecipeById: getRecipeById
    }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);