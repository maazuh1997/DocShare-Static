import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './Reducers/AppReducer';

const store = createStore(AppReducer, applyMiddleware(thunk));

store.subscribe(async() => {
    console.log('STATE=>', store.getState());
});
export { store };