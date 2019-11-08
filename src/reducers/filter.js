import { CHANGE_FILTER } from '../actions/index'

const initialState = {
  filter: null
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_FILTER:
      if (action.filter !== 'All') {
        return {
          filter: action.filter
        }
      } else {
          return {
            filter: null
          }
      }
    default:
      return state
  }
}
