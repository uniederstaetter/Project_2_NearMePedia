import React from 'react';
import {Text, View, Button, Linking, StyleSheet, TouchableOpacity} from 'react-native';

export default class SavedArticle extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <View style={savedArticleStyle.savedArticle}>
                <TouchableOpacity
                    style={savedArticleStyle.smallbutton}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                >
                    <Text style={savedArticleStyle.smallbuttontext}>{this.props.article.title}</Text>
                </TouchableOpacity>
            <Text style={savedArticleStyle.text}>Distance to my current location: {this.props.distance} meter</Text>
            </View>
        )

    }
}
const savedArticleStyle = StyleSheet.create({
    savedArticle: {
        marginTop: 2,
        marginBottom: 5,
        borderWidth: 2,
        padding: 10,
        borderColor: 'black',
        margin: 10,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
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