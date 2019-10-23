import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

//App.js has all states from redux
const initialState = {
  action: ""
};

//Redux is taking state from componets and action object to return next sate of application
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
  return state;
};

const store = createStore(reducer);

const App = () => {
  return (
    //Provider akes the Redux store available to any nested components wrapped in connect() function
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
