import React from 'react';
import {View} from 'react-native';
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
EnterLoactionScreen.navigationOptions = {title: "Enter a Location", headerStyle: { backgroundColor: '#a61b40' },headerTitleStyle: { color: 'white', fontSize:18 }};

export default EnterLoactionScreen
