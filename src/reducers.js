const initialState = {
    todos: [
      { title: 'My First TODO', description: '', done: false },
      { title: 'My Second TODO', description: '', done: false },
      { title: 'My Third TODO', description: '', done: false }
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos]
        };
      case 'CHANGE_TODO_STATE':
        const todos = [...state.todos];
        const todo = todos.splice(action.payload, 1)[0];
        todo.done = !todo.done;
        todos.push(todo);
        return {
          ...state,
          todos: todos
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  