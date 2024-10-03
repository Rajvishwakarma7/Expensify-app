import { View, Text } from "react-native";
import React from "react";
import { cardBGColors, colors } from "../theme";

const ExpenseCard = ({ item }) => {
  const { id, title, amount, category } = { ...item };
  //   console.log(item);
  return (
    <View
      style={{ backgroundColor: cardBGColors[id], height: 70 }}
      className=" mb-2 px-5 rounded-2xl flex-row justify-between items-center mx-2 p-2"
    >
      <View>
        <Text className={` ${colors.heading} font-bold`}>{title}</Text>
        <Text className={`${colors.heading}`}>{category}</Text>
      </View>
      <View>
        <Text>${amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
