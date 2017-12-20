/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from "lodash";
import Video from 'react-native-video';
import sample from './videos/sample.mp4';
import HelloWorld from './HelloWorld';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      rand: _.random(0,100),
      name: "Nerrad"
    };
  }

  componentDidMount() {
    // console.log("Hello ", this.state.name);
    HelloWorld.greeting("Nerrad!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React {this.state.name}! {this.state.rand}
        </Text>
        {/* <Video  source={sample}
                rate={1.0}
                muted={false}
                paused={false}
                resizeMode="cover"
                repeat={true}
                style={styles.backgroundVideo}
          /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
