
export interface Todo {
    text: string;
    id: string;
    isCompleted: boolean;
}

export type Todos = Todo[];

export interface StoreState {
    todos: Todos;
}
