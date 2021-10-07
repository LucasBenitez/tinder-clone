import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ActivityIndicator, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from './MapPreview';
const LocationPicker = props => {
  const [isFetching, setIsFetching] = useState(false)
  const [location, setLocation] = useState(null);
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
          Alert.alert(
              'Permisos insuficientes',
              'Necesita dar permisos de localización para la app',
              [{text: 'Ok'}]
          )
        return;
      }

      //let location = await Location.getCurrentPositionAsync({});
     // setLocation(location);
    })();
  }, []);
  const getLocationHandler = async () => {
      //if(!location){
        //  return;
     // }
      
      try{
        setIsFetching(true);
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        });
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
      } catch(err){
          Alert.alert(
              'No se pudo obtener la localización',
              'Por favot intente nuevamente',
              [{text: 'Ok'}]
          );
      }
      setIsFetching(false);
  }
  

  return (
    <View style={styles.locationPicker}>
        <View style = {styles.preview}>
            {!pickedLocation
            ? <Text>Location en proceso</Text>
        : <MapPreview location ={pickedLocation}/>}
        </View>
        <Button 
        title="Obtener location"
        onPress={getLocationHandler}
        />
    </View>
  );
}
const styles = StyleSheet.create({ 
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 
export default LocationPicker;
