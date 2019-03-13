import { State } from './../appReducer';
import { TodoProps } from './../components/TodoScreen';
import { Dispatch } from 'react';
import { TodoAction, add, reset } from './../actions/todos';
import { connect } from 'react-redux';
import TodoScreen from './../components/TodoScreen';

interface DispatchProps {
  add: (title: string) => void;
  reset: () => void;
}

const mapStateToProps = (state: State): TodoProps => ({
  todoData: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): DispatchProps => ({
  add: (title: string) => {
    dispatch(add(title));
  },
  reset: () => {
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoScreen);