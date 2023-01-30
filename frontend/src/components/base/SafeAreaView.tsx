import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";

type Props = ViewProps;

const SafeAreaViewCrossPlatform = (props: Props) => {
  return (
    <View style={styles.AndroidSafeArea}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaViewCrossPlatform;
