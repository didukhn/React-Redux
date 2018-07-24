import React, { Component } from 'react';
import RecipeCard from '../../components/RecipeCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllRecipes, deleteRecipe, updateRecipe, sortRecipesByStars } from './RecipesActions';
import { allRecipes, isLoading } from './RecipesReducer';
import RecipeRating from '../../components/RecipeRating';
import { Segment } from '../../../node_modules/semantic-ui-react';
import ControlBar from '../../components/ControlBar';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../scenes/ThemeContext';
import './Recipes.css';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            recipes: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (!state && !state.recipes && props.allRecipes) {
            return null;
        }

        //sync props and state and then filter
        const recipes = [...props.allRecipes];
        return {
            search: state.search,
            recipes: recipes.filter(x => x.title.includes(state.search))
        }
    }

    componentDidMount() {
        this.props.actions.fetchRecipes();
    }

    onDeleteKeyClick = (recipeId) => {
        this.props.actions.deleteRecipe(recipeId);
    }

    onCardClick = (recipeId) => {
        const { history } = this.props;
        history.push(`/rps/${recipeId}`);
    }

    onCreateClick = () => {
        const { history } = this.props;
        history.push('/rps/new');
    }

    onRecipeRate = (newRating, recipe) => {

        const updatedRecipe = { ...recipe };
        updatedRecipe.stars = newRating;

        this.props.actions.updateRecipe(updatedRecipe);
    }

    onSearchBarChange = e => {
        const substr = e.target.value;
        this.setState({
            search: substr
        });
    }

    onSortClick = () => {
        console.log('sort click');
        this.props.actions.sortByStars();
    }

    isDark = (theme) => {
        return theme == 'dark';
    }

    render() {
        const { recipes } = this.state;
        return (//<ThemeContext.Consumer> {theme => (
            <Segment loading={this.props.isLoading} inverted={this.isDark('dark')}>
                <ControlBar
                    onSearchChange={this.onSearchBarChange}
                    onCreateClick={this.onCreateClick}
                    onSortClick={this.onSortClick}
                />
                <Segment className={'card-list'}>
                    {recipes.length > 0 ?
                        recipes.map((x, i) =>
                            <RecipeCard
                                key={i}
                                recipe={x}
                                onClick={() => this.onDeleteKeyClick(x._id)}
                                onSettingsClick={() => this.props.history.push(`/rps/${x._id}/edit`)}
                                onCardClick={() => this.onCardClick(x._id)}
                            >
                                <RecipeRating
                                    rating={x.stars} onRate={(e, data) => this.onRecipeRate(data.rating, x)}
                                />
                            </RecipeCard>
                        ) : <div>Loading . . .</div>}
                </Segment>
            </Segment>//}
            //</ThemeContext.Consumer>
        );
    }
}

Recipes.defaultProps = {
    allRecipes: [],
    isLoading: false
};

Recipes.propTypes = {
    allRecipes: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        stars: PropTypes.number,
    }))
}

const mapStateToProps = state => ({
    allRecipes: allRecipes(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchRecipes: getAllRecipes,
        deleteRecipe: deleteRecipe,
        updateRecipe: updateRecipe,
        sortByStars: sortRecipesByStars
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);