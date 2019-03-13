export enum TodoActionType {
  ADD = 'ADD',
  RESET = 'RESET',
};

export interface TodoAction {
  type: TodoActionType;
  title?: string;
};

export const add = (title: string): TodoAction => ({
  title,
  type: TodoActionType.ADD,
});

export const reset = (): TodoAction => ({
  type: TodoActionType.RESET,
})