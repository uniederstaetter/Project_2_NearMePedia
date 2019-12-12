import React from 'react';
import {View} from 'react-native';
import ReadingList from '../components/ReadingList';
import {Subscribe} from "unstated";
import ArticleContainer from "../container/ArticleContainer";
import LocationContainer from "../container/LocationContainer";

//this screen component subscribes to both container, ArticleContainer and LocationContainer to get the list of
//saved articles (ArticleContainer) and to get the errormessage(LocationContainer). Furthermore it gets a callback function
//from the ArticleContainer which is used to delete the reading list.
const ReadingListScreen = props => {

    return (
        <View>
            <Subscribe to={[ArticleContainer, LocationContainer]}>
                {(articlecontainer, locationcontainer) => (
                    <ReadingList
                        readinglist={articlecontainer.state.articleList}
                        errormessage={locationcontainer.state.errorMessage}
                        onDelete={() => articlecontainer.clearAllData()}
                    />
                )}
            </Subscribe>
        </View>
    );
};
ReadingListScreen.navigationOptions = {
    title: "Reading List",
    headerStyle: {backgroundColor: '#a61b40'},
    headerTitleStyle: {color: 'white', fontSize: 18}
};

export default ReadingListScreen
