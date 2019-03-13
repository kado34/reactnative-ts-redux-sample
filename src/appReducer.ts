import { TodoAction, TodoActionType } from './actions/todos';

export interface State {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[]
}

export const initialState: State = {
  todos: []
}

const appReducer = (state: State = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            title: action.title || "",
            isComplete: false
          }
        ]
      };
    case TodoActionType.RESET:
      return {
        todos: []
      };
    default:
      return state;
  }
};

export default appReducer;