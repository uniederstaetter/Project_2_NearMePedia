import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Subscribe} from "unstated";
import SavedArticle from "./SavedArticle";
import LocationContainer from "./LocationContainer";
import NoLocationArticle from "./NoLocationArticle";

//this component represents the Reading List the user has created by saving articles.
//it has one state variable which is the errormessage that was passed by the parent component. This state variable is used for
//conditional rendering. If the errormessage is null, then the normal SavedArticle Component is called together with the distance to the current
//location of the user, otherwise it the message is not null, the NoLocationArticle Component is called without any distance.
export default class ReadingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: this.props.errormessage,
        }

    }

    //function to assign keys to each element of the list
    //Note as a key we simply use the index in the list.
    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        //it subscribes to the LocationContainer in this place and get not as props from the ReadingListScreen, since
        //this pros, the callback function passed, is not for the component ReadingList but rather for the SavedArticle Component
        //to seperate that and to prevent passing props through too many components it was implemented in this way.
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
        //reading list without any distance.
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

        //assigning of keys.
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
                    <TouchableOpacity
                        style={readingListStyle.button}
                        onPress={this.props.onDelete}
                    >
                        <Text style={readingListStyle.textstyle}>Delete Your List</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        )
    }
}
////////////////////////***************STYLING*********************///////////////////////////////////
const readingListStyle = StyleSheet.create({
    container: {
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
        marginBottom: 10,
        padding: 2,
        margin: 70,
    },
    textstyle: {
        fontSize: 18,
    },

});