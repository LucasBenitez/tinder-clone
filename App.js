import React, { useState} from 'react'
import { StyleSheet, View, Image, Modal, Text, Button } from 'react-native'


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblePass, setModalVisiblePass] = useState(false);
  function handleLike() {
    setModalVisible(false);
    console.log('like')
  }

  function handlePass() {
    setModalVisiblePass(false);
    console.log('pass')
  }

  function handleLikePress() {
    setModalVisible(true);
    console.log('like')
  }
  function handlePassPress() {
    setModalVisiblePass(true);
    console.log('pass')
  }

  const handleConfirmDelete = () => {
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>

    <Image 
      style={styles.img}
      source={{
      uri: 'https://images.unsplash.com/photo-1627735754418-3b581127eab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
      }}
    />
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalView} >
        <View >
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
    <Modal animationType="slide" visible={modalVisiblePass} transparent>
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
      <View style={styles.fixToText}>
        <Button
          title="Like"
          onPress={handleLikePress}
        />
        <Button
          title="Pass"
          onPress={handlePassPress}
        />
      </View>
  </View>
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
