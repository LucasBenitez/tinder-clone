import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import { insertUser } from '../db';
const NewUser = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState('')

    const handleNameChange = nameInput => setName(nameInput);
    const handleEmailChange = emailInput => setEmail(emailInput);

    const handleSave = () => {
        dispatch(insertUser(name, email));
        navigation.navigate('Usuarios');
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={handleNameChange}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                />
                <Button
                    title="Guardar usuario"
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default NewUser