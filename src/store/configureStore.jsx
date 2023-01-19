import { createStore, applyMiddleware, compose } from 'redux'
import { blogReducer } from "../reducers/blogReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
    
            blogReducer
        ,
        //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
export default configureStore;