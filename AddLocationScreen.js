import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import AddLocation from "./AddLocation";


const AddLocationScreen =props => {

    return (
        <View>
            <AddLocation
                onAdd={()=> props.navigation.navigate('CoordinatesInterest')}
            />
        </View>
    );
};
export default AddLocationScreen
