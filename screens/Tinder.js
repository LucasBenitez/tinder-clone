import React from "react";
import {View,Button,Text} from 'react-native'

export default function Tinder({navigation}){
    return(
        <View>
            <Text>Hola</Text>
            <Button title='Mensajes' onPress={()=>navigation.navigate('Mensajes')}></Button>
        </View>
    )
}