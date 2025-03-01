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
// import Snackbar from "react-native-snackbar";
import { Snackbar } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoading } from "../redux/slices/userSlice";
import Loader from "../components/Loader";

const SignUpScreen = () => {
  const { width, height } = Dimensions.get("window");
  const imageSize = width * 0.8;
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const userLoading = useSelector((state) => state.userSlice.userLoading);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    console.log("sign Up line goes Here !");

    if (Email && Password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, Email, Password);
        dispatch(setUserLoading(false));
      } catch (res) {
        console.log("Error during sign up:!", res.message);
        dispatch(setUserLoading(false));
      }
    } else {
      setSnackbarVisible(true);
      dispatch(setUserLoading(false));
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
                  className={`${colors.heading} text-xl font-bold text-center`}
                >
                  Sign Up
                </Text>
              </View>
            </View>
            <View className=" flex-row items-center justify-center my-3 mt-5">
              <Image
                style={{ width: imageSize, height: imageSize }}
                source={require("../assets/images/login.png")}
              />
            </View>
            <View className="space-y-3 mx-2">
              <Text className="text-lg font-bold"> Email</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-3"
                value={Email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              ></TextInput>
              <Text className="text-lg font-bold"> Password</Text>
              <TextInput
                className="bg-white rounded-full p-3 mb-3"
                value={Password}
                secureTextEntry
                onChangeText={(text) => {
                  setPassword(text);
                }}
              ></TextInput>
            </View>
          </View>
          <View>
            {userLoading ? (
              <Loader />
            ) : (
              <TouchableOpacity
                className="bg-green-400 p-2 rounded-full py-3 mb-4"
                onPress={handleSubmit}
              >
                <Text className="text-white font-bold  text-center">
                  Sign Up
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

export default SignUpScreen;
