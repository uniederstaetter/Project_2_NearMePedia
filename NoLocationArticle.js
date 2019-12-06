import React from 'react';
import {Text, View, Linking, StyleSheet, TouchableOpacity} from 'react-native';

export default class NoLocationArticle extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <View style={noLocationAricleStyle.noLocationArticle}>
                <TouchableOpacity
                    style={noLocationAricleStyle.smallbutton}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                >
                    <Text style={noLocationAricleStyle.smallbuttontext}>{this.props.article.title}</Text>
                </TouchableOpacity>
            </View>
        )

    }
}
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
        color:'black',

    },
    smallbuttontext: {
        fontSize: 18,
        textDecorationLine:'underline',
    }
});