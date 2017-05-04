import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// creat an object for the default date
const defaultState = {
	posts,
	comments
};

// Hook Redux into the chrome dev tools extension
const enhancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)

// Create the initial redux store. 
const store = createStore(rootReducer, defaultState, enhancers);

// We want the browser history to sit in Redux, not props.
export const history = syncHistoryWithStore(browserHistory, store);

// Enabling hot reloading on redux reducers
if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;