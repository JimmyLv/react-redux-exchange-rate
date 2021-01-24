import { createStore } from "redux";

const initialState = {
  amount: "1.50",
};

function rateReducer(state = initialState, action) {
  if (action.type === "updateAmount") {
    return {
      ...state,
      amount: action.payload,
    };
  }
  return state;
}

const store = createStore(rateReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log("state", state);
});

export default store;
