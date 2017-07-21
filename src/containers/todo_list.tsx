import TodoList from '../components/todo_list';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = ({ todos }: StoreState) => {
  return {
    todos
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.ToDoAction>) => {
  return {
    onAddTodo: (text: string) => dispatch(actions.addTodo(text)),
    onDeleteTodo: (id: string) => dispatch(actions.deleteTodo(id)),
    onCompleteTodo: (id: string) => dispatch(actions.completeTodo(id))
  };
};

export const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object) =>  {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoList);