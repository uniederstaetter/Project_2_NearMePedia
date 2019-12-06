import React from 'react';
import {Text, View,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";
import Coordinates from "./Coordinates";

export default class CoordinatesInterest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            errorMessage: this.props.errormessage
        };
    }

    addKeys = (val, index) => (
        {...val, key: index}
    );


    render() {
        const displayCoordinateList = this.props.coordinateList.map(location => {
            return (
                <View>
                    <Coordinates
                        location={location}
                        onSelect={this.props.onSelect}
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
                                <Subscribe to={[LocationContainer]}>
                                    {locationcontainer => (
                                        <TouchableOpacity
                                            style={coordinateStyle.button}
                                            onPress={() => {
                                                const coords = {
                                                    lat: locationcontainer.state.lat,
                                                    lng: locationcontainer.state.lng
                                                };
                                                this.props.onCurrentLocation(coords)
                                            }}
                                        >
                                            <Text style={coordinateStyle.textstyle}>Use your Current Location </Text>
                                        </TouchableOpacity>
                                    )}
                                </Subscribe>
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
const coordinateStyle = StyleSheet.create({
    button: {
        height: 40,
        width:'90%',
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        marginLeft:15,
        marginBottom:15,
        marginTop:5,
    },
    textstyle: {
        fontSize: 18,
    },
});