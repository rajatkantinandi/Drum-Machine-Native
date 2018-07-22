import React from "react";
import { StyleSheet, TouchableOpacity, Text, Switch } from "react-native";

export default class SwitchSet extends React.Component {
  state = {
    selected: false
  };
  switchIt = () => {
    this.setState({ selected: !this.state.selected });
    this.props.changeSet();
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.switchIt}>
        <Text style={styles.text}>Set 1</Text>
        <Switch
          value={this.state.selected}
          onValueChange={this.switchIt}
          tintColor="#f99"
          onTintColor="#9f9"
        />
        <Text style={styles.text}>Set 2</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#331",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: "orange"
  }
});
