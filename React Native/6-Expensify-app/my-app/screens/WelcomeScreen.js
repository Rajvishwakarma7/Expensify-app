import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View>
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../assets/images/welcome.gif")}
            className="h-96 w-96 shadow"
          />
        </View>
      </View>
      <View style={{ paddingTop: 180 }}>
        <Text
          className={`text-center font-bold text-3xl ${colors.heading}  mb-4`}
        >
          Expesify
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: colors.button }}
          className="mx-10 rounded-full mb-4"
          onPress={() => {
            navigation.navigate(`SignIn`);
          }}
        >
          <Text className="text-center font-bold p-3.5 text-white">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: colors.button }}
          className="mx-10 rounded-full"
          onPress={() => {
            navigation.navigate(`SignUp`);
          }}
        >
          <Text className="text-center font-bold p-3.5 text-white">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
