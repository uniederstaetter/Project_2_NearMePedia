import React from 'react';
import {View} from 'react-native';
import CoordinatesInterest from './CoordinatesInterest';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";

//screen component that calls the CoordinatesInterest component and passes some props to it.
//This props are mainly for navigation, for example if the user has added a new location and after clicking on the add button
//the user is directed back to the CoordinatesInterest screen.
//This screen component also subscribes to the LocationContainer to pass errormessage, the list of coordinates the user has stored,
//the coordinates of the users current location and the callback function on deletion.
const CoordinatesInterestScreen = props => {

    return (
        <View>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer => (
                    <CoordinatesInterest
                        onDelete={() => locationcontainer.clearAllData()}
                        onAdding={() => props.navigation.navigate('AddLocation')}
                        coordinateList={locationcontainer.state.coordinateList}
                        onSelect={address => props.navigation.navigate('ResultLocation', {location: address})}
                        onCurrentLocation={coords => props.navigation.navigate('ResultLocation', {location: coords})}
                        errormessage={locationcontainer.state.errorMessage}
                        lat={locationcontainer.state.lat}
                        lng={locationcontainer.state.lng}
                    />
                )}
            </Subscribe>


        </View>
    );
};
CoordinatesInterestScreen.navigationOptions = {
    title: "All about Coordinates",
    headerStyle: {backgroundColor: '#a61b40'},
    headerTitleStyle: {color: 'white', fontSize: 18}
};

export default CoordinatesInterestScreen
