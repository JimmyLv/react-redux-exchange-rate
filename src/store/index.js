import { createStore } from "redux";

// state
const initialState = {
  amountNumber: "1.50",
  currencyCode: "CNY",
  currencyData: { USD: 1.0 },
};

// reducers
function rateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return {
        ...state,
        amountNumber: action.payload,
      };
    case UPDATE_CURRENCY_CODE:
      return {
        ...state,
        currencyCode: action.payload,
      };
    default:
      return state;
  }
}

// actions
const UPDATE_AMOUNT = "updateAmount";
const UPDATE_CURRENCY_CODE = "updateCurrencyCode";

export function updateAmount(amount) {
  return {
    type: UPDATE_AMOUNT,
    payload: amount,
  };
}

export function updateCurrencyCode(amount) {
  return {
    type: UPDATE_CURRENCY_CODE,
    payload: amount,
  };
}

// selectors
export const getAmount = (state) => state.amountNumber;
export const getCurrencyCode = (state) => state.currencyCode;

const store = createStore(rateReducer);

export default store;
