import React from 'react';
import {Text, View, Linking, StyleSheet, TouchableOpacity} from 'react-native';

//this component represents an article that a user has saved. A saved article has a button that directs the user to the
//Wikipedia page of this article and a distance to the current location of the user.
export default class SavedArticle extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
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

                <TouchableOpacity
                    style={savedArticleStyle.button}
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
const savedArticleStyle = StyleSheet.create({
    savedArticle: {
        marginTop: 2,
        marginBottom: 5,
        borderWidth: 2,
        padding: 10,
        borderColor: 'black',
        margin: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    smallbutton: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        marginBottom:20,

    },
    smallbuttontext: {
        fontSize: 19,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
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