import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        // below, action.payload is an array (products) and if we just paste it as is without spreading then products and filtered_products would point to the same (object reference concept) and hence we need a copy of it so that both products and filtered_products are different, hence we use spread operator. This is very important
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      }
    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      }
    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      }
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      }
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state
      let tempProducts = [...filtered_products]
      if (sort === 'price-lowest') {
        tempProducts.sort((a, b) => {
          return a.price - b.price
        })
      }

      if (sort === 'price-highest') {
        tempProducts.sort((a, b) => b.price - a.price)
      }

      if (sort === 'name-a') {
        tempProducts.sort((a, b) => {
          // let nameA = a.name.toUpperCase()
          // let nameB = b.name.toUpperCase()
          // if (nameB > nameA) {
          //   return -1
          // }
          // if (nameA > nameB) {
          //   return 1
          // }
          // return 0

          // above commented lines can be written as below

          return a.name.localeCompare(b.name)
        })
      }

      if (sort === 'name-z') {
        tempProducts.sort((a, b) => {
          // let nameA = a.name.toUpperCase()
          // let nameB = b.name.toUpperCase()
          // if (nameA > nameB) {
          //   return -1
          // }
          // if (nameB > nameA) {
          //   return 1
          // }
          // return 0
          return b.name.localeCompare(a.name)
        })
      }

      return {
        ...state,
        filtered_products: tempProducts,
      }
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      }
    case FILTER_PRODUCTS:
      console.log(state)
      return {
        ...state,
      }
    default:
      return state
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
