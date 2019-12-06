import React from 'react';
import {View,Alert} from 'react-native';
import ResultLocation from './ResultLocation';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";


const ResultLocationScreen = props => {
    const resultAddress = props.navigation.getParam('location');
    if (resultAddress===''){
        Alert.alert('You did not enter any address, please go back!');
        return null;
    }
    else{
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
