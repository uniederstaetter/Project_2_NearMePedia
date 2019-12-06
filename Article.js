import React from 'react';
import {StyleSheet, Text, View, Button, Linking, TouchableOpacity} from 'react-native';
import ArticleContainer from './ArticleContainer';
import {Subscribe} from "unstated";


export default class Article extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View>
                <TouchableOpacity
                    style={anArticle.smallbutton}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                >
                    <Text style={anArticle.smallbuttontext}>{this.props.article.title}</Text>
                </TouchableOpacity>

                <Text style={anArticle.article}>Distance to Location: {this.props.article.distance} meter</Text>
                < Subscribe to={[ArticleContainer]}>
                    {articleContainer => (
                        <TouchableOpacity
                            style={anArticle.button}
                            onPress={() => articleContainer.addArticle(this.props.article)}
                        >
                            <Text style={anArticle.textstyle}>Save Article </Text>
                        </TouchableOpacity>
                    )}
                </Subscribe>
            </View>
        )

    }


}
const anArticle = StyleSheet.create({
    article: {
        fontWeight: 'bold',
        padding: 2,
        fontSize: 15,
        margin: 10,

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
        marginLeft: 65,
    },
    textstyle: {
        fontSize: 18,
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
