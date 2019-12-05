import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import NearMePedia from './NearMePedia';

const NearMePediaScreen =props => {

    return (
        <View style={styles.container}>
            <NearMePedia
                onStart={()=> props.navigation.navigate('EnterLocation')}
                onInterest={()=> props.navigation.navigate('CoordinatesInterest')}
                onReading={()=>props.navigation.navigate('ReadingList')}
            />
        </View>
    );
};
export default NearMePediaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});