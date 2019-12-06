import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class NearMePedia extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onMounting();
    };

    render() {
        return (
            <View>
                <Text style={mainscreen.title}>NearMePedia</Text>
                <TouchableOpacity
                    style={mainscreen.button}
                    onPress={this.props.onStart}
                >
                    <Text style={mainscreen.textstyle}> Get started </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={mainscreen.button}
                    onPress={this.props.onInterest}
                >
                    <Text style={mainscreen.textstyle}>Coordinates Management</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={mainscreen.button}
                    onPress={() => this.props.onReading()}
                >
                    <Text style={mainscreen.textstyle}>Reading list </Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const mainscreen = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,

    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,

    },
    subsubtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,

    },
    button: {
        height: 40,
        width: 220,
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom:10,
        padding:2,
    },
    textstyle: {
        fontSize: 18,
    },
});
