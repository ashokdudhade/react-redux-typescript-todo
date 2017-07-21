import * as constants from '../constants';

export interface AddTodo {
    type: constants.ADD_TODO; 
    text: string;
}

export const addTodo = (text: string): AddTodo => {
    return {
        type: constants.ADD_TODO,
        text
    };
};

export interface DeleteTodo {
    type: constants.DELETE_TODO; 
    id: string;
}

export const deleteTodo = (id: string): DeleteTodo => {
    return {
        type: constants.DELETE_TODO,
        id
    };
};

export interface CompleteTodo {
    type: constants.COMPLETE_TODO; 
    id: string;
}

export const completeTodo = (id: string): CompleteTodo => {
    return {
        type: constants.COMPLETE_TODO,
        id
    };
};

export type ToDoAction =  AddTodo | DeleteTodo | CompleteTodo;
