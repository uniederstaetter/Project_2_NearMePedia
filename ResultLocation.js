import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class ResultLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: ''}
    }

    fetchArticles = async () => {
        const articles = await this.props.location;
        this.setState({articles: articles})
        console.log(this.state.articles);

    }



    componentDidMount() {
        console.log('mounted');
        this.fetchArticles();

    }


    render() {
        return (
            <View>
                <Text>Results:</Text>

            </View>
        )
    }
}