const initialState = {
    count: 0
}
const CounterReducer = (state = initialState, action) => {
    switch(action.type){
        case "COUNTER_INCREMENT":
        return {count: state.count+1}

        case "COUNTER_DECREMENT":
        return {count: state.count-1}
    }
    return state

}

export default CounterReducer