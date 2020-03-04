import React from 'react';
import './App.css';
import Counter from './Components/Counter';
// import create store from redux
import { createStore } from 'redux'

// import the Provider
import {Provider} from 'react-redux'

// Since we’re gonna be moving our Counter state into Redux, 
// let’s set up its initial state right now
const initialState ={
  count:0
}

// We have to provide a function that will return the state. That function is called a reducer.
//  The reducer’s job is to take the current state and an action and return the new state.
function reducer(state = initialState, action){
  console.log(state, action )

  // To make actions actually do something, we need to write some code in the reducer that 
  // will inspect the type of each action and update the state accordingly.

  // if(action.type === "INCREMENT") {
  //    return {count: state.count +1}
  // } else if(action.type === "DECREMENT") {
  //   return {count: state.count - 1}  
  // }else if(action.type === "RESET" ){
  //   return( {count : 0})
  // }else{
  //   return state
  // }


  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }


}

 // we need to create a store to hold the state.
const store = createStore(reducer)
// An action is Redux-speak for a plain object with a property called type.
// Redux has a built-in function called dispatch. Call it with an action, and Redux will call your reducer
//  with that action (and then replace the state with whatever your reducer returned).
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

console.log(store)

const App =()=> {
  // By wrapping the entire app with the Provider component, every component in the app tree will 
  // be able to access the Redux store if it wants to.
  return (
    // Pass the store as a prop.
    <Provider store={store}>
    <Counter />
    </Provider>
  );
}

export default App;
