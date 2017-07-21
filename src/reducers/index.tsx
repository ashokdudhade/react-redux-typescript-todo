import { ToDoAction } from '../actions';
import { StoreState, Todo, Todos } from '../types';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';
import { uniqueId } from 'lodash';

export const todoReducer = (state: StoreState, action: ToDoAction): StoreState => {
    const idPrefix: string = 'id_';
    
    switch (action.type) {
        case ADD_TODO:
            const todo: Todo = { id: uniqueId(idPrefix), text: action.text, isCompleted: false };

            let todos: Todos = [];

            if (state.todos != null) {
                todos = [...state.todos];
            }
            todos.push(todo);

            return { ...state, todos };
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos].filter((t: Todo) => t.id !== action.id)
            };
        case COMPLETE_TODO:
            const newTodos: Todos = [...state.todos];
            
            let todo1 = newTodos.filter((t) => t.id === action.id)[0];

            todo1.isCompleted = !todo1.isCompleted;

            return {...state,  todos: newTodos };
            
        default:
            break;
    }
    return state;
};