const initialState = {
    todoListNames: [
      'View List',
      'Table List',
    ],
    selectedTodoListName: 'View List',
  };
  
  const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TODOLIST_NAME':
        if (state.todoListNames.includes(action.payload)) {
          return {
            ...state,
            selectedTodoListName: action.payload,
          };
        } else {
          return state;
        }
      default:
        return state;
    }
  };
  
  export default todoListReducer;
  