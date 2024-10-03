import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants";

const AddExpensiveScreen = () => {
  const { width, height } = Dimensions.get("window");
  const imageSize = width * 0.8;
  const navigation = useNavigation();
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [category, setcategory] = useState("");

  function handleExpeses() {
    if (title && amount && category) {
      console.log(title, "------", amount, "---------", category);
      navigation.goBack();
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreenWrapper>
        <View className=" justify-between mx-4 h-full">
          <View>
            <View className="flex-row items-center pt-2 mx-2">
              <BackButton />
              <View className=" flex-1">
                <Text
                  className={`${colors.heading} text-xl font-bold text-center `}
                >
                  Add Expense
                </Text>
              </View>
            </View>
            <View className=" flex-row items-center justify-center my-2 mt-5">
              <Image
                style={{ width: imageSize, height: imageSize }}
                source={require("../assets/images/4.png")}
              />
            </View>
            <View className="space-y-3 mx-2">
              <Text className="text-lg font-bold">For What ?</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-2"
                value={title}
                onChangeText={(text) => {
                  settitle(text);
                }}
              ></TextInput>
              <Text className="text-lg font-bold"> How Mouch</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-2"
                value={amount}
                onChangeText={(text) => {
                  setamount(text);
                }}
              ></TextInput>
            </View>
          </View>
          <View>
            <Text className="text-lg font-bold mb-3"> Enter Category</Text>
            <View className="flex-row mb-3 items-center flex-wrap">
              {categories.map((items, index) => {
                let bgColor = "bg-white";
                if (items == category) {
                  bgColor = "bg-green-200";
                }
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setcategory(items);
                    }}
                    key={index}
                    className={` ${bgColor} rounded-full p-3 px-4 mb-2 mr-3 `}
                  >
                    <Text> {items.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <TouchableOpacity
              className="bg-green-400 p-2 rounded-full py-3 "
              onPress={handleExpeses}
            >
              <Text className="text-white font-bold  text-center">
                Add Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenWrapper>
    </ScrollView>
  );
};

export default AddExpensiveScreen;
