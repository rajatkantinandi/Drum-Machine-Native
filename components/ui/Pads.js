import React from "react";
import { View } from "react-native";
import DrumPad from "./DrumPad";

const Pads = props => {
  const pads = props.bank.map((elem, index) => {
    return (
      <DrumPad
        id={elem.id}
        key={index}
        keyTrigger={elem.keyTrigger}
        playClip={props.playClip}
        url={elem.url}
      />
    );
  });
  return (
    <View
      style={{
        flex: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: 280,
        margin: 10
      }}
    >
      {pads}
    </View>
  );
};

export default Pads;
