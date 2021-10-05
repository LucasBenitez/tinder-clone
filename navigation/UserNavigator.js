import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import Profile from '../screens/Profile'
import UserDetail from '../screens/UserDetail'
import NewUser from '../screens/NewUser'

const UserStack = createNativeStackNavigator()

const UserNavigator = () => (
    <UserStack.Navigator
        initialRoute='Usuarios'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#3D2C8D',
            },
            headerTintColor: '#FAEEE0',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <UserStack.Screen
            name="Usuarios"
            component={Profile}
            options={{title: 'Usuarios'}} 
        />
        <UserStack.Screen
            name="Detalle"
            component={UserDetail}
            options={{title: 'Detalle'}} 
        />
        <UserStack.Screen
            name="Nuevo"
            component={NewUser}
            options={{title: 'Nuevo usuario'}} 
        />
    </UserStack.Navigator>
)


export default UserNavigator