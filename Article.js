import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Linking} from 'react-native';
import ArticleContainer from './ArticleContainer';
import {Subscribe} from "unstated";


export default class Article extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View>
                <Button
                    title={this.props.article.title}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                />

                <Text style={anArticle.article}>Distance to Location: {this.props.article.distance} meter</Text>
                < Subscribe to={[ArticleContainer]}>
                    {articleContainer => (
                        <Button
                            title={'Save Article'}
                            onPress={() => articleContainer.addArticle(this.props.article)}
                        />
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

});
