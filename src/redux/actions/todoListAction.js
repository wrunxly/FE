// export const setTodoListName = (name) => {
//     return (dispatch) => {
//       dispatch({ type: 'SET_TODOLIST_NAME', payload: name });
//     };
//   };
  

export const SET_TODOLIST_NAME = 'SET_TODOLIST_NAME';

export const setTodoListName = (name) => ({
  type: SET_TODOLIST_NAME,
  payload: name,
});