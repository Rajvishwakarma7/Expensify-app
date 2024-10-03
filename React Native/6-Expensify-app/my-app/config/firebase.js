// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKaAqxfStMxL06MbS48NJiEfnuBlZUcs",
  authDomain: "expensify-efa38.firebaseapp.com",
  projectId: "expensify-efa38",
  storageBucket: "expensify-efa38.appspot.com",
  messagingSenderId: "66970108883",
  appId: "1:66970108883:web:f09759c8dcf013bd68a526",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
export const db = getFirestore(app);

// Firestore collections
export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
