import React from 'react';
import {Text, View, Linking, StyleSheet, TouchableOpacity} from 'react-native';

//this component is called when the user has not granted the access to his current location,
//then the reading list will only be a list of articles without any distance. Otherwise the component is
//very similar to the SavedArticle component.
export default class NoLocationArticle extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={noLocationAricleStyle.noLocationArticle}>
                <TouchableOpacity
                    style={noLocationAricleStyle.smallbutton}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                >
                    <Text style={noLocationAricleStyle.smallbuttontext}>{this.props.article.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={noLocationAricleStyle.button}
                    onPress={() => {
                        this.props.onDelete()
                    }}
                >
                    <Text>Delete Article from List</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

////////////////////////***************STYLING*********************///////////////////////////////////
const noLocationAricleStyle = StyleSheet.create({
    noLocationArticle: {
        marginTop: 2,
        marginBottom: 5,
        borderWidth: 2,
        padding: 10,
        borderColor: 'black',
        margin: 10,
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
    },
    button: {
        height: 25,
        width: 190,
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        padding: 2,
        marginLeft: 70,
        marginTop:15,
    },
});