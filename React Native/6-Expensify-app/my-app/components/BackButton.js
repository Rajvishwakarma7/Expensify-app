import { TouchableOpacity, Touchable, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../theme";
// import Entypo from 'react-native-vector-icons/Entypo';
const BackButton = () => {
  const naviagtion = useNavigation();
  return (
    <TouchableOpacity
      className="rounded-lg h-8 w-8 bg-black text-white"
      // style={{ backgroundColor: "grey" }}
      onPress={() => naviagtion.goBack()}
    >
      <AntDesign name="left" size={30} color={colors.button} />
    </TouchableOpacity>
  );
};

export default BackButton;
