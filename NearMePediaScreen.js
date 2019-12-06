import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import NearMePedia from './NearMePedia';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer"
import ReadingListScreen from "./ReadingListScreen";

const NearMePediaScreen =props => {

    return (
        <View style={styles.container}>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer =>(
                    <NearMePedia
                        onStart={()=> props.navigation.navigate('EnterLocation')}
                        onInterest={()=> props.navigation.navigate('CoordinatesInterest')}
                        onReading={()=>props.navigation.navigate('ReadingList')}
                        onMounting={locationcontainer.getCurrentLocation}
                    />
                )
                }
            </Subscribe>

        </View>
    );
};
NearMePediaScreen.navigationOptions = {headerStyle: { backgroundColor: '#a61b40' },headerTitleStyle: { color: 'green' }};
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