import { createStore } from "redux";

// state
const initialState = {
  amountNumber: "1.50",
};

// reducers
function rateReducer(state = initialState, action) {
  if (action.type === UPDATE_AMOUNT) {
    return {
      ...state,
      amountNumber: action.payload,
    };
  }
  return state;
}

// actions
const UPDATE_AMOUNT = "updateAmount";

export function updateAmount(amount) {
  return {
    type: UPDATE_AMOUNT,
    payload: amount,
  };
}

// selectors
export const getAmount = (state) => state.amountNumber;

const store = createStore(rateReducer);

export default store;
