import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
//import TabNavigator from './TabNavigator';
import UserNavigator from './UserNavigator';
const MainNavigator = () => {
  return (
    <NavigationContainer>
        <UserNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;