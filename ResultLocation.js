import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ArticleList from "./ArticleList";


export default class ResultLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: null}
    }

    fetchArticles = async () => {
        const articles = await this.props.location;
        //console.log(articles);
        this.setState({articles: articles})

    }


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
const resultStyle = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    text:{
        margin:'auto',
        fontSize:25,
        fontWeight: 'bold',
    }
});