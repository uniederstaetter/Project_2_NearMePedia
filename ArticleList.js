import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Article from "./Article";

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }


    //function to assign keys to each element of the list
    //Note as a key we simply use the index in the list.
    addKeys = (val, index) => (
        {...val, key: index}
    )

    render() {
        const theArticleList = this.props.list.map(art => {
            return (
                <View style={articleStyle.article}>

                    <Article
                        article={art}

                    />


                </View>
            )
        });

        ;
        const articles = theArticleList.map(this.addKeys)

        return (

            <ScrollView>
                {articles}
            </ScrollView>
        )


    }
}
const articleStyle = StyleSheet.create({
    article: {
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 10,
        borderWidth: 2,
        padding: 2,
        borderColor: 'black',
        margin: 10,
    },

});