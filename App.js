import React, { useState} from 'react'
import { StyleSheet, View, Image, Modal, Text, Button } from 'react-native'
import Profile from './screens/Profile';
import Home from './screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblePass, setModalVisiblePass] = useState(false);

 

  return (
  //   <View style={styles.container}>
  //    <Modal animationType="slide" visible={modalVisible} transparent>
  //     <View style={styles.modalView} >
  //       <View >
  //         <Text style={styles.modalMessage}>Te ha gustado la foto</Text>
  //         <View>
  //           <Button
  //             onPress={handleLike}
  //             title="CONFIRMAR"
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   </Modal>
  //   <Modal animationType="slide" visible={modalVisiblePass} transparent>
  //     <View style={styles.modalView}>
  //       <View >
  //         <Text style={styles.modalMessage}>No te ha gustado la foto</Text>
  //         <View >
  //           <Button
  //           style={styles.button}
  //             onPress={handlePass}
  //             title="CONFIRMAR"
  //           />
  //         </View>
  //       </View>
  //     </View> 
  //   </Modal> 
     
  // </View>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalMessage: {
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
});
