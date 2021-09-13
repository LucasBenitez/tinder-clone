
  import React, { useState} from 'react'
  import {StyleSheet, View, Image,Button,Modal,Text } from 'react-native'
  import { useSelector } from 'react-redux';
  
  const Interactions  = ({ navigation, route }) =>  {
  
    return (
   <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent>
       <View style={styles.modalView} >
         <View>
           <Text style={styles.modalMessage}>Te ha gustado la foto</Text>
          <View>
             <Button
              onPress={handleLike}
               title="CONFIRMAR"
             />
           </View>
         </View>
       </View>
     </Modal>
     <Modal animationType="slide" visible={modalVisible} transparent>
       <View style={styles.modalView}>
         <View >
           <Text style={styles.modalMessage}>No te ha gustado la foto</Text>
           <View >
             <Button
             style={styles.button}
               onPress={handlePass}
               title="CONFIRMAR"
             />
           </View>
         </View>
       </View> 
     </Modal> 
   </View> 
      );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
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
})
  export default Interactions;