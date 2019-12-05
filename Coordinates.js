import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput} from 'react-native';

export default class Coordinates extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            address:this.props.location.name
        }
    }
    //TODO: ask if it is okay to pass navigation props in the normal way, hence trough more than one component.
    render() {
        return (
            <View style={aCoordinate.coordinate}>
                <Button
                    title={this.props.location.name}
                    onPress={()=>this.props.onSelect(this.state.address)}
                />
            </View>
        )

    }
}

const aCoordinate = StyleSheet.create({
    coordinate: {
        fontWeight: 'bold',
        padding: 2,
        fontSize: 15,
        margin: 10,
        borderWidth:2,
        borderColor:'black',

    },

});
