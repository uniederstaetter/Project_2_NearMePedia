import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import CoordinatesInterest from './CoordinatesInterest';

const CoordinatesInterestScreen =props => {

    return (
        <View>
            <CoordinatesInterest
                onAdding={()=>props.navigation.navigate('AddLocation')}
            />
        </View>
    );
};
export default CoordinatesInterestScreen
