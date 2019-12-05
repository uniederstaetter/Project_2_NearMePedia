import React from 'react';
import {Text, View} from 'react-native';
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
            <View>
                <Text>Results:</Text>
                {this.state.articles ?
                    <View>

                        <ArticleList
                            list={this.state.articles}

                        />


                    </View> :
                    <View>
                        <Text>Loading...</Text>
                    </View>}
            </View>
        )
    }

}