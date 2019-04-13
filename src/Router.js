import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            sceneStyle={{ paddingTop: 64 }}
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            sceneStyle={{ paddingTop: 64 }}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            sceneStyle={{ paddingTop: 64 }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
