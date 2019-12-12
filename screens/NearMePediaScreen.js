import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import NearMePedia from '../components/NearMePedia';
import {Subscribe} from "unstated";
import LocationContainer from "../container/LocationContainer"

//navigation component that is used to call the NearMePedia component, i.e., the home screen.
//it passes some navigation props and a callback function which is called when the component did mounting,
//which asks the user if he wants to grant access to his current location. For that the screen component must subscribe to the
//LocationContainer.
const NearMePediaScreen = props => {

    return (
        <View style={styles.container}>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer => (
                    <NearMePedia
                        onStart={() => props.navigation.navigate('EnterLocation')}
                        onInterest={() => props.navigation.navigate('CoordinatesInterest')}
                        onReading={() => props.navigation.navigate('ReadingList')}
                        onMounting={locationcontainer.getCurrentLocation}
                    />
                )
                }
            </Subscribe>

        </View>
    );
};
NearMePediaScreen.navigationOptions = {headerStyle: {backgroundColor: '#a61b40'}, headerTitleStyle: {color: 'green'}};
export default NearMePediaScreen

////////////////////////***************STYLING*********************///////////////////////////////////
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});