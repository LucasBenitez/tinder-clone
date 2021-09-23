  import React from "react";
 import { StyleSheet, View, Text, Button } from "react-native";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import {Ionicons} from '@expo/vector-icons';
 import Profile from '../screens/Profile'
 import Home from '../screens/Home'
 import { useSelector } from 'react-redux';
 const BottomTabs  = createBottomTabNavigator()
 const TabNavigator = () => (
     <BottomTabs.Navigator
     screenOptions={{
       headerShown: false,
       tabBarShowLabel: false,
       tabBarStyle: { ...styles.shadow, ...styles.tabBar },
     }}
     initialRouteName="Home"
   >
     <BottomTabs.Screen
       name="HomeTab"
       component={Home}
       options={{
         tabBarIcon: () => (
           <View style={styles.item}>
             <Ionicons name="md-home" size={24} color="black" />
             <Text>Home</Text>
           </View>
         )
       }}
     />
     <BottomTabs.Screen
       name="ProfileTab"
       component={Profile}
       options={{
         tabBarIcon: () => (
           <View style={styles.item}>
             <Ionicons name="md-person" size={24} color="black" />
             <Text>Profile</Text>
           </View>
         )
       }}
     />
   </BottomTabs.Navigator>
 )


 const styles = StyleSheet.create({
   shadow: {
     shadowColor: '#7f5df0',
     shadowOffset: { width: 0, height: 10 },
     shadowOpacity: 0.25,     shadowRadius: 0.25,
     elevation: 5,
   },
   tabBar: {
     position: 'absolute',
     bottom: 25,
     left: 20,
     right: 20,
     borderRadius: 15,
     height: 90,
   },
   item: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 })

export default TabNavigator; 