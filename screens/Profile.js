import React, { useState} from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'

const Profile = ({ navigation }) => {
    return (
            <View style={styles.container}>
             <Text>This is Jhon profile</Text>
            </View>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
      },
})
export default Profile;
