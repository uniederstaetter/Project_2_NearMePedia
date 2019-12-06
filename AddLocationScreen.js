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
AddLocationScreen.navigationOptions = {title: "Add a Location", headerStyle: { backgroundColor: '#a61b40' },headerTitleStyle: { color: 'white', fontSize:18 }};

export default AddLocationScreen
