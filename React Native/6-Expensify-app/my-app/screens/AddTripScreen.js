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
import Loader from "../components/Loader";
import { Snackbar } from "react-native-paper";
import { tripsRef } from "../config/firebase";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";

const AddTripScreen = () => {
  const { width, height } = Dimensions.get("window");
  const imageSize = width * 0.8;
  const navigation = useNavigation();
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setloading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const { user } = useSelector((state) => state.userSlice);
  const handleTrip = async () => {
    if (place && country) {
      setloading(true);
      // let doc = await addDoc(tripsRef, {
      //   place,
      //   country,
      //   userId: user.uid,
      // });
      // console.log("doc--------------->", doc);
      // if (doc && doc.uid) {
      //   navigation.goBack();
      // }s
      setloading(false);
    } else {
      setSnackbarVisible(true);
      setloading(false);
    }
  };

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
                  Add Trip
                </Text>
              </View>
            </View>
            <View className=" flex-row items-center justify-center my-3 mt-5">
              <Image
                style={{ width: imageSize, height: imageSize }}
                source={require("../assets/images/4.png")}
              />
            </View>
            <View className="space-y-3 mx-2">
              <Text className="text-lg font-bold"> Where on Earth?</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-3"
                value={place}
                onChangeText={(text) => {
                  setPlace(text);
                }}
              ></TextInput>
              <Text className="text-lg font-bold"> Which Country?</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-3"
                value={country}
                onChangeText={(text) => {
                  setCountry(text);
                }}
              ></TextInput>
            </View>
          </View>
          <View>
            {loading ? (
              <Loader />
            ) : (
              <TouchableOpacity
                className="bg-green-400 p-2 rounded-full py-3"
                onPress={handleTrip}
              >
                <Text className="text-white font-bold  text-center">
                  Add Trip
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScreenWrapper>

      {/* Snackbar Component */}

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_LONG}
        style={{
          backgroundColor: "red",
        }}
      >
        Email and password are required!
      </Snackbar>
    </ScrollView>
  );
};

export default AddTripScreen;
