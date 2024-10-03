import { View, Text, StatusBar } from "react-native";
import React from "react";

const ScreenWrapper = ({ children }) => {
  let statusBarHeight = StatusBar.currentHeight;
  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
};

export default ScreenWrapper;
