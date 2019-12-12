import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ArticleList from "./ArticleList";

//this component represents the screen that displays all articles for a given location.
//it has a state variable called articles, which are passed as props from the parent component and represent the
//answer of the Wikipedia API, this articles are retrieved when the component did the mounting.
//Once the articles have been retrieved (due to async) the component calls the ArticleList component. While loading
//it simply displayes "Loading...".
export default class ResultLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: null}
    }

    fetchArticles = async () => {
        const articles = await this.props.location;
        //console.log(articles);
        this.setState({articles: articles})

    };

    componentDidMount() {
        this.fetchArticles();

    }

    render() {

        return (
            <View style={resultStyle.container}>
                {this.state.articles ?
                    <View>
                        <ArticleList
                            list={this.state.articles}
                        />
                    </View> :
                    <View>
                        <Text style={resultStyle.text}>Loading...</Text>
                    </View>}
            </View>
        )
    }

}
////////////////////////***************STYLING*********************///////////////////////////////////
const resultStyle = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    text: {
        margin: 'auto',
        fontSize: 25,
        fontWeight: 'bold',
    }
});