import React from 'react';
import {View} from 'react-native';
import EnterLocation from "../components/EnterLocation";

//this screen component is used to call the EnterLocation component and it passes navigation props to it.
//when the user clicks the display button, this callback function is used to navigate to the ResultLocation component and passes
//it the address the user has entered.
const EnterLoactionScreen = props => {

    return (
        <View>
            <EnterLocation
                onDisplay={address => props.navigation.navigate('ResultLocation', {location: address})}
            />
        </View>
    );
};
EnterLoactionScreen.navigationOptions = {
    title: "Enter a Location",
    headerStyle: {backgroundColor: '#a61b40'},
    headerTitleStyle: {color: 'white', fontSize: 18}
};

export default EnterLoactionScreen
