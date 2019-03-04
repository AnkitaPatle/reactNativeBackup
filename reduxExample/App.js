import React, { Component } from "react";
import { Provider } from "react-redux"
import CounterApp from "./APP/Components/CounterComponent";
import store from "./APP/Reducers/Index"

// const initialState = {
//   counter: 0
// }
// const reducer = (state = initialState, action) => {
//   switch(action.type){

//     case "INCREASE_COUNTER":
//     return {counter: state.counter+1}

//     case "DECREASE_COUNTER":
//     return {counter: state.counter-1}
//   }
//   return state
// }

// const store = createStore(reducer)

 class App extends Component {
   constructor(props){
     super(props);
   }
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
     
    );
  }
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     color: "#fff",
//     backgroundColor: "black"
//   }
// });
