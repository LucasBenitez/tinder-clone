import React from "react";
import {Image , StyleSheet, View} from 'react-native'
import {MAP} from '../constants';

const MapPreview = (props) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
    center=${props.location.lat},${props.location.lng}
    &zoom=14
    &size=400x200
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}
    &key=${MAP.API_KEY}`;
    return (
        <View style={{...styles.mapPreview, ...props.style}}>
            {props.location ? (
                <Image style={styles.mapImage} source={{uri: mapPreviewUrl}}/>
            ) : (
                props.children
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
})
export default MapPreview