import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/types";

export const initialState = {
  basket: Array<Product>(),
};

const reducer = (state: any, action: { type: any; payload: { item: any } }) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload.item] };
    case REMOVE_FROM_BASKET:
    default:
      return state;
  }
};

export default reducer;
