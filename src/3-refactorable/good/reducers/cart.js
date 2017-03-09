import { ADD_TO_CART } from '../constants/ActionTypes';

const initialState = {
  productIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.productId];
  }
};