import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddExpensiveScreen from "../screens/AddExpensiveScreen";
import AddTripScreen from "../screens/AddTripScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignScreen from "../screens/SignScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setUser } from "../redux/slices/userSlice";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const { uid, email, apiKey } = user;
      dispatch(setUser({ uid: uid, email: email, apiKey: apiKey }));
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />

          <Stack.Screen
            name="AddExpensive"
            options={{ headerShown: false }}
            component={AddExpensiveScreen}
          />
          <Stack.Screen
            name="AddTrip"
            options={{ headerShown: false }}
            component={AddTripScreen}
          />
          <Stack.Screen
            name="TripExpenses"
            options={{ headerShown: false }}
            component={TripExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="SignIn"
            options={{ headerShown: false, presentation: "modal" }}
            component={SignScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false, presentation: "modal" }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
