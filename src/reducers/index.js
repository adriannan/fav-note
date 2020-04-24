import { REMOVE_ITEM_SUCCESS, ADD_ITEM_SUCCESS, AUTH_SUCCESS, FETCH_SUCCESS } from 'actions';

const initialState = {
  userID: '5ea183be6efcb70570c185e3',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
