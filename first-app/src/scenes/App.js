import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import Recipes from '../containers/Recipes/Recipes';
import configStore from '../store/index';
import RecipeEdit from '../containers/RecipeEdit/RecipeEdit'
import RecipesNew from '../containers/RecipesNew/RecipesNew';
import SingleRecipe from '../containers/SingleRecipe/SingleRecipe';
import { ThemeContext } from './ThemeContext';

const history = createHistory();
const store = configStore(history);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ThemeContext.Provider value='dark'>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>

                        <Route path="/" exact render={() => <Redirect to="rps" />} />
                        <Route path="/rps/new" exact component={RecipesNew} />
                        <Route path="/rps/:id/edit" component={RecipeEdit} />
                        <Route path='/rps/:id' component={SingleRecipe} />

                        <Route path="/rps" component={Recipes} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </ThemeContext.Provider>;
    }
}