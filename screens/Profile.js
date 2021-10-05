   
import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import UserItem from '../components/UserItem';
import { loadUsers } from '../store/actions/user.action';
import CustomHeaderButton from '../components/HeaderButton';
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
           <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
               <Item
                    title="Nueva"
                    iconName="md-add"
                    onPress={() => navigation.navigate('Nuevo')}
               />
           </HeaderButtons> 
        )
    })
  }, [navigation]);

  useEffect(() => {
      dispatch(loadUsers());
  }, []);

  const renderItem = (data) => (
    <UserItem
        name={data.item.name}
        email={data.item.email}
        onSelect={() => navigation.navigate('Detalle')}
    />
  )
    return (
        <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
    );
  };
export default Profile;
