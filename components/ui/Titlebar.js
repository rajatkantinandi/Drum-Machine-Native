import React from "react";
import { View, Text } from "react-native";
export default () => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        backgroundColor: "#222",
        marginBottom: 30,
        padding: 20
      }}
    >
      <Text
        style={{
          textAlign: "center",
          padding: 25,
          fontSize: 30,
          color: "orange",
          fontWeight: "bold"
        }}
      >
        Drum Machine
      </Text>
    </View>
  );
};
