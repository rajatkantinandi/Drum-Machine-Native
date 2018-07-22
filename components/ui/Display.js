import React from "react";
import { View, Text } from "react-native";

export default props => {
  return (
    <View
      style={{
        width: 270,
        height: 70,
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#114"
      }}
    >
      <Text
        style={{
          color: "whitesmoke",
          fontSize: 22,
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        {props.id}
      </Text>
    </View>
  );
};
