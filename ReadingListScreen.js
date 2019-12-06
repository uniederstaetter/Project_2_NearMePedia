import React from 'react';
import {View} from 'react-native';
import ReadingList from './ReadingList';
import {Subscribe} from "unstated";
import ArticleContainer from "./ArticleContainer";
import LocationContainer from "./LocationContainer";


const ReadingListScreen =props => {

    return (
        <View>
            <Subscribe to={[ArticleContainer, LocationContainer]}>
                {(articlecontainer, locationcontainer)=>(
                    <ReadingList
                        readinglist={articlecontainer.state.articleList}
                        errormessage={locationcontainer.state.errorMessage}
                    />
                )}
            </Subscribe>
        </View>
    );
};
ReadingListScreen.navigationOptions = {title: "Reading List", headerStyle: { backgroundColor: '#a61b40' },headerTitleStyle: { color: 'white', fontSize:18 }};

export default ReadingListScreen
