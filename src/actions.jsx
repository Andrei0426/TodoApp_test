export const addTodo = todo => ({
    type: 'ADD_TODO',
    payload: todo
  });
  
  export const changeTodoState = index => ({
    type: 'CHANGE_TODO_STATE',
    payload: index
  });
  