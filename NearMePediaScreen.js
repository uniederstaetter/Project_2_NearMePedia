import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import NearMePedia from './NearMePedia';

const NearMePediaScreen =props => {

    return (
        <View>
            <NearMePedia
                onStart={()=> props.navigation.navigate('EnterLocation')}
                onInterest={()=> props.navigation.navigate('CoordinatesInterest')}
                onReading={()=>props.navigation.navigate('ReadingList')}
            />
        </View>
    );
};
export default NearMePediaScreen
