import * as React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    key?: string;
    onDeleteTodo: (id: string) => void;
    onCompleteTodo: (id: string) => void;
}

export class TodoItem extends React.Component<TodoItemProps, {}> {
    render() {
        const { todo, onDeleteTodo, onCompleteTodo } = this.props;

        return (
            <div className="view container col-sm-12">
                <div className="row">
                    <div className="col-sm-1">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => onCompleteTodo(todo.id)}
                        />
                    </div>
                    <span className="label label-primary  col-sm-5"> {todo.text} </span>
                    <button
                        type="button"
                        className="btn btn-danger col-sm-1"
                        onClick={() => onDeleteTodo(todo.id)} >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}