import { all, fork } from 'redux-saga/effects';
import recipeSaga from '../containers/Recipes/RecipesSaga';

export default function* rootSaga() {
    yield all([
        fork(recipeSaga)
    ]);
}