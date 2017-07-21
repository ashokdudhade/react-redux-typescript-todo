
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoList from './containers/todo_list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoReducer } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(todoReducer, {
  todos: []
});

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
