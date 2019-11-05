const case1 = "CASE1"

const bookReducer = (state = '', action) => {
  switch (action.type){
    case case1:
      return action.info
    default:
      return state
  }
}

export { bookReducer }
