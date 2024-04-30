export const setSidebarName = (name) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SIDEBAR_NAME', payload: name });
  };
};
