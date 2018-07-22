import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Expo from "expo";
import Pads from "./components/ui/Pads";
import Display from "./components/ui/Display";
import Titlebar from "./components/ui/Titlebar";
import { bankOne, bankTwo } from "./sources";
import SwitchSet from "./components/ui/SwitchSet";
export default class App extends React.Component {
  state = {
    current: "",
    isReady: false,
    set: bankOne
  };
  loadAllAssets = async () => {
    for (let elem of bankOne) {
      await Expo.Asset.loadAsync(elem.url);
    }
    for (let elem of bankTwo) {
      await Expo.Asset.loadAsync(elem.url);
    }
  };
  playSound = async source => {
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(source);
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
      console.error(error);
    }
  };
  playClip = id => {
    this.setState({
      current: id
    });
    const soundToPlay = this.state.set.filter(elem => elem.id === id)[0].url;
    this.playSound(soundToPlay);
  };
  changeSet = () => {
    if (this.state.set == bankOne) {
      this.setState({ set: bankTwo });
    } else {
      this.setState({ set: bankOne });
    }
  };
  componentWillMount() {
    this.loadAllAssets().then(this.setState({ isReady: true }));
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Titlebar />
        <View style={styles.inner}>
          <Display id={this.state.current} />
          <Pads bank={this.state.set} playClip={this.playClip} />
          <SwitchSet changeSet={this.changeSet} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#114",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  inner: {
    flex: 0,
    backgroundColor: "#ffe",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 30,
    borderColor: "lime",
    borderWidth: 2
  }
});
