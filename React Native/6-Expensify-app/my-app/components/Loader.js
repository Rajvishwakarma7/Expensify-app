import { View, Text, ActivityIndicator } from "react-native";
import React, { lazy } from "react";
import { colors } from "../theme";

const Loader = () => {
  return (
    <View className="flex-row justify-center py-8">
      <ActivityIndicator size="large" color={colors.button} />
    </View>
  );
};

export default Loader;
