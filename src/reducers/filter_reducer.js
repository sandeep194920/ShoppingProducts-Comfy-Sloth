import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        // below, action.payload is an array (products) and if we just paste it as is without spreading then products and filtered_products would point to the same (object reference concept) and hence we need a copy of it so that both products and filtered_products are different, hence we use spread operator. This is very important
        products: [...action.payload],
        filtered_products: [...action.payload],
      };
    default:
      return state;
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
