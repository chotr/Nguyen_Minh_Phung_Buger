import { ADD_BREADMID } from "../actions/burgerAction";

const initialState = {
  burger: { salad: 2, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

  menu: {
    salad: 10,

    cheese: 20,

    beef: 55,
  },

  total: 85,
};

export const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BREADMID: {
      let { propsBurger, amount } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;

      state.total += amount * state.menu[propsBurger];

      return { ...state };
    }
    default:
      return { ...state };
  }
  // return { ...state };
};
