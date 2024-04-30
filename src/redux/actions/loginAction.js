export const authLogin = (userData) => {
  console.log(userData);
  return (dispatch) => {
    dispatch({ type: 'GET_USER', payload: userData });
  };
};
