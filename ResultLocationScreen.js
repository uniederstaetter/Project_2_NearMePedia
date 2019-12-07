import React from 'react';
import {View, Alert} from 'react-native';
import ResultLocation from './ResultLocation';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";

//this screen component subscribes to the Locationcontainer to pass the ResultLocation component the articles
//for the desired location, which are gathered from the navigation props.(given by all components that navigate to the
//ResultLocation and pass an address the user has entered. For that the screen component also checks if he parameter is not empty,
//to prevent an error, in that case nothing is returned.
const ResultLocationScreen = props => {
    const resultAddress = props.navigation.getParam('location');
    if (resultAddress === '') {
        Alert.alert('You did not enter any address, please go back!');
        return null;
    } else {
        return (
            <View>
                <Subscribe to={[LocationContainer]}>
                    {locationcontainer => (
                        <ResultLocation
                            location={locationcontainer.toCoordinates(resultAddress)}
                        />
                    )}
                </Subscribe>

            </View>
        );
    }

};
ResultLocationScreen.navigationOptions = {
    title: "Results",
    headerStyle: {backgroundColor: '#a61b40'},
    headerTitleStyle: {color: 'white', fontSize: 18}
};

export default ResultLocationScreen
