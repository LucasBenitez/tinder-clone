import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTinder from '../screens/HomeTinder'
const Stack = createNativeStackNavigator()
export default function Navigator(){
  return (
    <Stack.Navigator>
          <Stack.Screen
              name='Home'
              component={HomeTinder}
          />
    </Stack.Navigator>
 
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
})
