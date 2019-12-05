import React from 'react';
import {View} from 'react-native';
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
