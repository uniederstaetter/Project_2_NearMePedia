import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Subscribe} from "unstated";
import ArticleContainer from "./ArticleContainer";
import SavedArticle from "./SavedArticle";
import LocationContainer from "./LocationContainer";
import NoLocationArticle from "./NoLocationArticle";

export default class ReadingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: this.props.errormessage,
        }

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const displayReadingList = this.props.readinglist.map(article => {
            return (
                <Subscribe to={[LocationContainer]}>
                    {locationcontainer => (
                        <SavedArticle
                            article={article}
                            distance={locationcontainer.theCurrentDistance(article.lat, article.lng)}
                        />
                    )}
                </Subscribe>

            )
        });
        const displayNoLocationList = this.props.readinglist.map(article => {
                return (
                    <View>
                        <NoLocationArticle
                            article={article}
                        />
                    </View>
                )
            }
        );


        const readingList = displayReadingList.map(this.addKeys);
        const readingListnoLocation = displayNoLocationList.map(this.addKeys);

        return (

            <ScrollView style={readingListStyle.container}>
                <View>
                    {!this.state.error ?

                        <View>
                            {readingList}
                        </View> :

                        <View>
                            {readingListnoLocation}
                        </View>}


                </View>
                <View>
                    <Subscribe to={[ArticleContainer]}>
                        {articlecontainer => (
                            <TouchableOpacity
                            style={readingListStyle.button}
                            onPress={() => articlecontainer.clearAllData()}
                            >
                            <Text style={readingListStyle.textstyle}>Delete Your List</Text>
                            </TouchableOpacity>
                        )}

                    </Subscribe>
                </View>

            </ScrollView>

        )
    }
}

const readingListStyle = StyleSheet.create({
    container:{
       marginTop: 5,
    },
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
    button: {
        height: 40,
        width: 220,
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom:10,
        padding:2,
        margin: 70,
    },
    textstyle: {
        fontSize: 18,
    },

});