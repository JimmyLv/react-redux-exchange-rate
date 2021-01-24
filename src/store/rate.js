import { getExchangeRates } from "../api";

export const supportedCurrencies = [
  "CNY",
  "USD",
  "EUR",
  "JPY",
  "CAD",
  "GBP",
  "MXN",
];

// state
const initialState = {
  amountNumber: "1.50",
  currencyCode: "CNY",
  currencyData: { USD: 1.0 },
};

// reducers
export default function rateReducer(state = initialState, action) {
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
    case UPDATE_CURRENCY_DATA:
      return {
        ...state,
        currencyData: action.payload,
      };
    default:
      return state;
  }
}

// actions
const UPDATE_AMOUNT = "updateAmount";
const UPDATE_CURRENCY_CODE = "updateCurrencyCode";
const UPDATE_CURRENCY_DATA = "updateCurrencyData";

export function updateAmount(amount) {
  return {
    type: UPDATE_AMOUNT,
    payload: amount,
  };
}

export function updateCurrencyCode(currencyCode) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CURRENCY_CODE,
      payload: currencyCode,
    });
    dispatch(updateCurrencyData());
  };
}

export function updateCurrencyData() {
  return (dispatch, getState) => {
    const state = getState();
    getExchangeRates(state.rate.currencyCode, supportedCurrencies).then(
      (rates) => {
        dispatch({
          type: UPDATE_CURRENCY_DATA,
          payload: rates,
        });
      }
    );
  };
}

// selectors
export const getAmount = (state) => state.rate.amountNumber;
export const getCurrencyCode = (state) => state.rate.currencyCode;
export const getCurrencyData = (state) => state.rate.currencyData;
