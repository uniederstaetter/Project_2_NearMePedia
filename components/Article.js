import React from 'react';
import {StyleSheet, Text, View,Linking, TouchableOpacity} from 'react-native';
import ArticleContainer from '../container/ArticleContainer';
import {Subscribe} from "unstated";

//this component represents an Article that is displayed.
//an article contains a button with title the Wikipedia article and another button which allows the user to save the article.
//it does not have any state it simply uses the props that have been passed by the parent component.
//this props are the title of the article. Furthermore it subscribes to the ArticleContainer to save the articles in a persistent list.
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

////////////////////////***************STYLING*********************///////////////////////////////////
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
        color: 'black',

    },
    smallbuttontext: {
        fontSize: 18,
        textDecorationLine: 'underline',
    }


});
