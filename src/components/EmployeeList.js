import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, FlatList } from "react-native";
import { employeesFetch } from "../actions";
import ListItem from "./ListItem";
class EmployeeList extends Component {
  keyExtractor = item => item.name;
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderRow({ item }) {
    return <ListItem employee={item} {...this.props} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderRow.bind(this)}
      />
    );
  }
}
const mapStateToProps = ({ employees }) => {
  return {
    employees: _.map(employees, (value, uid) => {
      return { ...value, uid };
    })
  };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
