import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
// import randomImage from "../assets/images/randomImage";
// import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import ExpenseCard from "../components/ExpenseCard";

const TripExpensesScreen = ({ item }) => {
  const { id, place, country } = { item };
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const imageSize = width * 0.8;

  let items = [
    { id: 1, title: "Buy EarPhone", amount: 4, category: "shoping" },
    { id: 2, title: "Sell Laptop", amount: 5, category: "Sell" },
    { id: 3, title: "Swimming", amount: 2, category: "Entertainment" },
    { id: 4, title: "watch a Movie", amount: 100, category: "Entertainment" },
    { id: 5, title: "Buy shirt", amount: 9, category: "shoping" },
    { id: 6, title: "ate Momos", amount: 5, category: "food" },
  ];
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row items-center pt-2 mx-2 mb-3">
        <BackButton />
        <View className=" flex-1">
          <Text className={`${colors.heading} text-xl font-bold text-center `}>
            Add Place
          </Text>
          <Text className={`${colors.heading} text-sm font-bold text-center `}>
            Add Country
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center items-center rounded-xl mx-4 mb-4">
        <Image
          source={require("../assets/images/7.png")}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>

      <View className="flex-row justify-between items-center  p-4">
        <Text className={`${colors.heading} font-bold text-2xl shadow-sm`}>
          Expenses
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddExpensive")}
          className="p-2 px-3 py bg-white border border-gray-200 rounded-full"
        >
          <Text className={`${colors.heading}`}>Add Expenses</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 430 }}>
        <FlatList
          data={items}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          className="mx-3"
          renderItem={({ item }) => {
            return <ExpenseCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TripExpensesScreen;
