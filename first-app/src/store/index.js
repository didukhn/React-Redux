import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import recipesReducers from '../containers/Recipes/RecipesReducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const configStore = (history) => {

    const rootReducer = combineReducers({
        recipes: recipesReducers
    });

    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    const store = createStore(
        connectRouter(history)(rootReducer),
        composeWithDevTools(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configStore;