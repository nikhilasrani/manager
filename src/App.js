import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDPYY9WtlAEiFBtkkYqA8AnGrq0mxmUH14",
      authDomain: "manager-90199.firebaseapp.com",
      databaseURL: "https://manager-90199.firebaseio.com",
      projectId: "manager-90199",
      storageBucket: "manager-90199.appspot.com",
      messagingSenderId: "531419974483"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
