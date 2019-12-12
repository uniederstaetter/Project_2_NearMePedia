import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Coordinates from "./Coordinates";

//CoordinatesInterest component handles the list of coordinates the user has stored and offers some
//additional functionality such as a button to add a location, use current location(not always) and delete the list of coordinates.
//Notice that via conditional rendering the current location button is only available if the user has granted access to his/her current location.
//The current location button calls the callback function that was passed by the screen component and uses the
//lat and lng coordinates of the user passed as props.(current location).
export default class CoordinatesInterest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            errorMessage: this.props.errormessage
        };
    }

    //function to assign keys to each element of the list
    //Note as a key we simply use the index in the list.
    addKeys = (val, index) => (
        {...val, key: index}
    );


    render() {
        //the component gets from the screen component that is calling it the list of coordinates that are stored for the user.
        //for each element in the list, it calls the Coordinates component and passes each element as location prop and
        //additionally it passes a callback that is executed once the user clicks on a coordinates element, i.e., a button. (see Coordinates.js for that logic)
        const displayCoordinateList = this.props.coordinateList.map((location,index) => {
            return (
                <View>
                    <Coordinates
                        location={location}
                        onSelect={this.props.onSelect}
                        onDelete={()=>this.props.onDeleteLocation(index)}
                    />

                </View>

            )
        });
        const coordinateList = displayCoordinateList.map(this.addKeys);

        return (
            <ScrollView>

                <View>
                    {coordinateList}
                </View>
                <View>
                    <TouchableOpacity
                        style={coordinateStyle.button}
                        onPress={this.props.onAdding}
                    >
                        <Text style={coordinateStyle.textstyle}>Add a Location to your List </Text>
                    </TouchableOpacity>

                    <View>
                        {!this.state.errorMessage ?
                            <View>
                                <TouchableOpacity
                                    style={coordinateStyle.button}
                                    onPress={() => {
                                        const coords = {
                                            lat: this.props.lat,
                                            lng: this.props.lng
                                        };
                                        this.props.onCurrentLocation(coords)
                                    }}
                                >
                                    <Text style={coordinateStyle.textstyle}>Use your Current Location </Text>
                                </TouchableOpacity>

                            </View> : null}
                    </View>
                    <TouchableOpacity
                        style={coordinateStyle.button}
                        onPress={this.props.onDelete}
                    >
                        <Text style={coordinateStyle.textstyle}>Delete your List </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}
////////////////////////***************STYLING*********************///////////////////////////////////
const coordinateStyle = StyleSheet.create({
    button: {
        height: 40,
        width: '90%',
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 5,
    },
    textstyle: {
        fontSize: 18,
    },
});