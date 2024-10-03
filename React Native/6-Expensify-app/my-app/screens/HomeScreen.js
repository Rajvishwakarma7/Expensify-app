import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
const HomeScreen = () => {
  // console.log("Name is Raj Vishwakarma ");
  const navigation = useNavigation();

  let items = [
    { id: 1, place: "gujrat", country: "india" },
    { id: 2, place: "California", country: "USA" },
    { id: 3, place: "Tokyo", country: "Japan" },
    { id: 4, place: "Paris", country: "France" },
    { id: 5, place: "Berlin", country: "Germany" },
    { id: 6, place: "Sydney", country: "Australia" },
    { id: 7, place: "Toronto", country: "Canada" },
    { id: 8, place: "Cape Town", country: "South Africa" },
  ];

  const handleLogOut = async () => {
    await signOut(auth);
  };
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center  p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleLogOut}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={`${colors.heading}`}>LogOut</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>

      <View className="flex-row justify-between items-center  p-4">
        <Text className={`${colors.heading} font-bold text-2xl shadow-sm`}>
          Recent Tips
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddTrip")}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={`${colors.heading}`}>Add Trip</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 430 }}>
        <FlatList
          data={items}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-around",
          }}
          className="mx-3"
          ListEmptyComponent={
            <EmptyList data={"You have not recorded any Trip !"} />
          }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
                onPress={() => {
                  navigation.navigate("TripExpenses", { ...item });
                }}
              >
                <View>
                  <Image source={randomImage()} className="w-36 h-36 mb-2" />
                  <Text className={`${colors.heading} font-bold`}>
                    {item?.place}
                  </Text>
                  <Text className={`${colors.heading} text-xs`}>
                    {item?.country}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
