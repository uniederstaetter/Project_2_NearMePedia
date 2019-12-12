import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//this component represents the home screen of the application where the user can start with the app. First it asks the user for permission in
// accessing his current location. This are 3 buttons. The get started button lets the user enter a location of his choice and displays articles.
//the coordinates management button directs the user to his list of saved location, where he can add locations or use his
//current location to display articles, if he has granted access to his location. The Reading List button directs the user to his saved
//articles, which are shown with the distance to the user if he has granted the permission in the first place.
export default class NearMePedia extends React.Component {
    constructor(props) {
        super(props)
    }

    //on mounting of the application the component calls the callback function which asks the user if he wants to
    //grant access to his current location.
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
////////////////////////***************STYLING*********************///////////////////////////////////
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
        marginBottom: 10,
        padding: 2,
    },
    textstyle: {
        fontSize: 18,
    },
});
