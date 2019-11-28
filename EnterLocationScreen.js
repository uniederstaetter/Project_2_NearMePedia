import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import EnterLocation from "./EnterLocation";


const EnterLoactionScreen =props => {

    return (
        <View>
            <EnterLocation
                onDisplay={address => props.navigation.navigate('ResultLocation', {location: address})}
            />
        </View>
    );
};
export default EnterLoactionScreen
