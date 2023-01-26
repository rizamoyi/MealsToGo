import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      name="Restaurants"
    >
      <RestaurantStack.Screen name="Helloworld" component={RestaurantsScreen} />
    </RestaurantStack.Navigator>
  );
};
