import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//Coordinates component represent an element in the list of coordinates the user has saved.
//notice that a Coordinates is a button with name of the saved location and on click the user is directed
//to the result screen where all the articles near by are displayed.
export default class Coordinates extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={aCoordinate.coordinate}>
                <TouchableOpacity
                    style={aCoordinate.smallbutton}
                    onPress={() => this.props.onSelect(this.props.location.name)}
                >
                    <Text style={aCoordinate.smallbuttontext}>{this.props.location.name} </Text>
                </TouchableOpacity>
            </View>
        )

    }
}

////////////////////////***************STYLING*********************///////////////////////////////////
const aCoordinate = StyleSheet.create({
    coordinate: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 15,
        margin: 10,
        borderWidth: 2,
        borderColor: 'black',

    },
    smallbutton: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',

    },
    smallbuttontext: {
        fontSize: 18,
        textDecorationLine: 'underline',
    }

});
