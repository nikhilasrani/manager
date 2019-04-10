import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
