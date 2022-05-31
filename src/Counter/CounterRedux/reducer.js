const initialState = {
  count: 0
}

const reducerRedux = (state=initialState, action) => {
  // const { step, min } = action.payload;
  switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + action.payload.step
            }
        case "decrement":
            return {
              ...state, 
                count: state.count - action.payload.step
            }
        case "reset":
            return {
                count: action.payload.min
            }
        default:
            return state;
    }
}

export default reducerRedux