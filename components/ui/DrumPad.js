import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.playClip(this.props.id);
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: this.props.bgColor }]}
        onPress={this.handlePress}
      >
        <Text style={styles.text}>{this.props.keyTrigger}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    borderWidth: 3,
    padding: 25,
    width: 80,
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "#44a"
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  }
});
