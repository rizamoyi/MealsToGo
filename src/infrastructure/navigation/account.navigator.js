import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

const AccountScreen = () => {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

export const AccountNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Account" component={AccountScreen} />
      <stack.Screen name="Login" component={LoginScreen} />
    </stack.Navigator>
  );
};
