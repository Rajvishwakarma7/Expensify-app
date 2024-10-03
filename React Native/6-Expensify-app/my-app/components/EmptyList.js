import { View, Text, Image } from "react-native";
import React from "react";

const EmptyList = ({ data }) => {
  return (
    <View className="justify-center items-center space-y-3">
      <Image
        className="w-36 h-36 shadow"
        source={require("../assets/images/empty.png")}
        onError={(error) =>
          console.log("Image Error: ", error.nativeEvent.error)
        }
      />
      <Text className="text-red-500">
        {data && data ? data : "Data is Not found !"}
      </Text>
    </View>
  );
};

export default EmptyList;
