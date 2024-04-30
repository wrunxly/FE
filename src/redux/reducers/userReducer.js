const initialState = {
  lists: [],
  detail: null,
};

const userReducer = (state = initialState, action) => {
  // console.log("masuk gan")
  switch (action.type) {
    case 'LIST_USER':
      // console.log('Masuk Reducer')
      return {
        ...state,
        lists: action.payload,
      };
    case 'DETAIL_USER':
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer
