import * as React from 'react';
import { Todos } from '../types';
import { TodoItem } from './todo_item';

export interface Props {
    onAddTodo?: (text: string) => void;
    todos?: Todos;
    onDeleteTodo: (id: string) => void;
    onCompleteTodo: (id: string) => void;
}

class TodoList extends React.Component<Props, {}> {

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13 && this.props.onAddTodo != null) {
            const text = e.currentTarget.value.trim();
            if (text === '') {
                return;
            }
            this.props.onAddTodo(text);
            e.preventDefault();
            e.currentTarget.value = '';
        }
    }

    render() {
        const { todos, onDeleteTodo, onCompleteTodo } = this.props;

        return (
            <div>
                Todo: <input type="text" onKeyDown={this.handleKeyDown} />

                <ul className="list-group">
                    {

                        todos != null ?
                            todos.map(todo =>
                                <li className="list-group-item">
                                    <TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        onDeleteTodo={onDeleteTodo}
                                        onCompleteTodo={onCompleteTodo} 
                                    />
                                </li>
                            ) : null
                    }
                </ul>
            </div >
        );
    }
}

export default TodoList;
