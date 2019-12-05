import React from 'react';
import {View} from 'react-native';
import ReadingList from './ReadingList';
import {Subscribe} from "unstated";
import ArticleContainer from "./ArticleContainer";
import LocationContainer from "./LocationContainer";


const ReadingListScreen =props => {

    return (
        <View>
            <Subscribe to={[ArticleContainer]}>
                {articlecontainer=>(
                    <ReadingList
                        readinglist={articlecontainer.state.articleList}
                    />
                )}
            </Subscribe>
        </View>
    );
};
export default ReadingListScreen
