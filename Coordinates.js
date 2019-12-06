import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';

export default class Coordinates extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            address:this.props.location.name
        }
    }
    render() {
        return (
            <View style={aCoordinate.coordinate}>
                <TouchableOpacity
                    style={aCoordinate.smallbutton}
                    onPress={()=>this.props.onSelect(this.state.address)}
                >
                    <Text style={aCoordinate.smallbuttontext}>{this.props.location.name} </Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const aCoordinate = StyleSheet.create({
    coordinate: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 15,
        margin: 10,
        borderWidth:2,
        borderColor:'black',

    },
    smallbutton: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color:'black',

    },
    smallbuttontext: {
        fontSize: 18,
        textDecorationLine:'underline',
    }

});
