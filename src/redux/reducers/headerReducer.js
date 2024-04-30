// headerReducer.js

const initialState = {
  isEdit: false,
  value: 0,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_EDITING':
      return {
        ...state,
        isEdit: action.payload,
      };
    case 'CLOSE_EDIT': // Menangani aksi CLOSE_EDIT
      return {
        ...state,
        isEdit: false, // Menutup mode edit dengan mengatur isEdit menjadi false
      };
    case 'UPDATE_VALUE': // Menangani aksi CLOSE_EDIT
      return {
        ...state,
        isEdit: state.isEdit,
        value: action.payload, // Menutup mode edit dengan mengatur isEdit menjadi false
      };
    default:
      return state;
  }
};

export default headerReducer;
