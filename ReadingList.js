import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {Subscribe} from "unstated";
import ArticleContainer from "./ArticleContainer";
import SavedArticle from "./SavedArticle";
import LocationContainer from "./LocationContainer";
import NoLocationArticle from "./NoLocationArticle";

export default class ReadingList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            error:null,
        }

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const displayReadingList = this.props.readinglist.map(article => {
            //console.log(article);
            return (
                <View>
                    {!this.state.error?
                    <View style={readingListStyle.readinglist}>

                        <Subscribe to={[LocationContainer]}>
                            {locationcontainer => (
                                <SavedArticle
                                    article={article}
                                    distance={locationcontainer.theCurrentDistance(article.lat, article.lng)}
                                />
                            )}

                        </Subscribe>


                    </View>:
                        <View style={readingListStyle.readinglist}>
                            <NoLocationArticle
                                article={article}
                            />
                        </View>
                    }
                </View>

            )
        });

        const readingList = displayReadingList.map(this.addKeys);
        return (
            <View>
                <Text style={readingListStyle.title}>Your Reading List: </Text>
                <ScrollView>
                    {readingList}
                </ScrollView>

                <Subscribe to={[ArticleContainer]}>
                    {articlecontainer => (
                        <Button
                            title={'Delete All'}
                            onPress={() => articlecontainer.clearAllData()}
                        />
                    )}

                </Subscribe>
            </View>
        )
    }
}

const readingListStyle = StyleSheet.create({
    readinglist: {
        marginTop: 2,
        marginBottom: 10,
        borderWidth: 2,
        padding: 2,
        borderColor: 'black',
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        padding: 5,
        marginBottom: 10,
        margin: 15,
    },

});