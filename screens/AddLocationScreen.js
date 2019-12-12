import React from 'react';
import {View} from 'react-native';
import AddLocation from "../components/AddLocation";
import {Subscribe} from "unstated";
import LocationContainer from "../container/LocationContainer";

//this screen component is used for navigation purposes.
// it calls the AddLocation component and passes props. In that case the props are only for navigation purposes.
//that means once a user has entered a location of his interest the application navigates back to the CoordinatesInterest Component.
const AddLocationScreen = props => {

    return (
        <View>
            <Subscribe to={[LocationContainer]}>
                {locationcontainer => (
                    <AddLocation
                        onAdd={() => props.navigation.navigate('CoordinatesInterest')}
                        onSubmit={address => locationcontainer.addCoordinate(address)}
                    />
                )}
            </Subscribe>
        </View>
    );
};
AddLocationScreen.navigationOptions = {
    title: "Add a Location",
    headerStyle: {backgroundColor: '#a61b40'},
    headerTitleStyle: {color: 'white', fontSize: 18}
};

export default AddLocationScreen
