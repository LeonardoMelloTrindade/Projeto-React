const initialState = {
    array: []
  }
  
  const arrayItens = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ARRAY':
        return {
          ...state,
          array: action.payload
        }
      default:
        return state
    }
  }
  
  export default arrayItens