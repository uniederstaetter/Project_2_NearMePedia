import React from 'react';
import {Alert} from 'react-native';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native';


export default class ArticleContainer extends PersistContainer {
    state = {
        articleList: [],

    }

    addArticle = article => {
        const newList = [...this.state.articleList, article];
        this.setState({articleList: newList});
        Alert.alert('The Article has been saved');
    };

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    }

    clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
        this.setState({articleList: []});
    }

}