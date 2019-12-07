import React from 'react';
import {Alert} from 'react-native';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native';

//ArticleContainer is a persistent container, that means it keeps a list of articles the user has saved among several usages of the app.
export default class ArticleContainer extends PersistContainer {
    state = {
        articleList: [],

    };

    //this function takes as a parameter an article and creates out of the existing list of articles a new one containing the
    //passed article.
    addArticle = article => {
        const newList = [...this.state.articleList, article];
        this.setState({articleList: newList});
        Alert.alert('The Article has been saved');
    };

    //required field for making the container persistent.
    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };

    //this function deletes the current list of articles. Mainly used for debugging purposes but implemented as a user function too.
    clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
        this.setState({articleList: []});
    }

}