const initialState = {
  userData: { email: '', password: '' }, // Inisialisasi userData dengan nilai awal
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
