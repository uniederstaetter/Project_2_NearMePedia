import React from 'react';
import {View} from 'react-native';
import ResultLocation from './ResultLocation';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";

const ResultLocationScreen = props => {
    const resultAddress = props.navigation.getParam('location');
    //console.log(resultAddress);

//TODO: this props will always call the function of locationcontainer
    //TODO: need to have a prop for the current location .
    return (
        <View>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer =>(
                    <ResultLocation
                        location={locationcontainer.toCoordinates(resultAddress)}
                    />
                )}
            </Subscribe>

        </View>
    );
};
export default ResultLocationScreen
