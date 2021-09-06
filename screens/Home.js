import React, { useState} from 'react'
import {StyleSheet, View, Image,Button } from 'react-native'

const Home  = ({ navigation }) =>  {
  function handlePass() {
    setModalVisiblePass(false);
    console.log('pass')
  }

  function handlePassPress() {
    setModalVisiblePass(true);
    console.log('pass')
  }
  function handleLike() {
    setModalVisiblePass(false);
    console.log('like')
  }

  function handleLikePress() {
    setModalVisiblePass(true);
    console.log('like')
  }
  return (
   
         <View style={styles.container}>
              <Image 
             style={styles.img}
             source={{
             uri: 'https://images.unsplash.com/photo-1627735754418-3b581127eab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80'
             }}
             />
             <View style={styles.fixToText}>
         <Button
           title="Like"
           onPress={handleLikePress}
         />
      <Button 
        title="Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
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
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30
      },
})
export default Home;

