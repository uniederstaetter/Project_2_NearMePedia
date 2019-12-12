import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Article from "./Article";

//this component represents the list of articles the user finds on displaying the results for the entered location.
export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }


    //function to assign keys to each element of the list
    //Note as a key we simply use the index in the list.
    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        //an article list is created by using the props passed from the parent, which are the results retrieved from the API.
        //each element in the list is again an Article, so for each element the component Article is called, passing it one article.
        //notice that an article consists of a title, a distance to the entered location and longitude and latitude coordinates.
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
////////////////////////***************STYLING*********************///////////////////////////////////
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