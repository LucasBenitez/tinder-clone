import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TopBar from './TopBar';
const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TopBar />
    </NavigationContainer>
  );
};

export default MainNavigator;