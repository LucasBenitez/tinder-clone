import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const UserItem = ({ name, email, onSelect  }) => {
  return (
    <TouchableOpacity
    onPress={onSelect}
    style={styles.userItem}
  >
    <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
  </TouchableOpacity>
      
  );
};

const styles = StyleSheet.create({
    userItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    marginBottom: 6,
  },
  email: {
    color: '#777',
    fontSize: 16,
  }
});

export default UserItem;