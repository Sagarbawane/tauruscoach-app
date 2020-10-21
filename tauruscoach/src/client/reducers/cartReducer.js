const intialState = [];

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return state.concat(action.payload);
    }
    case "REMOVE_CART_ITEM": {
      return state.filter((ele) => ele._id !== action.payload);
    }

    default: {
      return [].concat(state);
    }
  }
};
export default cartReducer;
