import React from 'react';
import {View} from 'react-native';
import CoordinatesInterest from './CoordinatesInterest';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";


const CoordinatesInterestScreen = props => {

    return (
        //TODO: too many props?
        <View>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer => (
                    <CoordinatesInterest
                        onDelete={() => locationcontainer.clearAllData()}
                        onAdding={() => props.navigation.navigate('AddLocation')}
                        coordinateList={locationcontainer.state.coordinateList}
                        onSelect={address => props.navigation.navigate('ResultLocation', {location: address})}
                        onCurrentLocation={coords => props.navigation.navigate('ResultLocation', {location: coords})}
                    />
                )}
            </Subscribe>


        </View>
    );
};
export default CoordinatesInterestScreen
