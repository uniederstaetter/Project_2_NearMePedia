import React from 'react';
import { PersistContainer } from 'unstated-persist'
import { AsyncStorage } from 'react-native';


export default class ArticleContainer extends PersistContainer{
    state ={
        articleList: [],

    }

    addArticle=article=>{
        const newList= [...this.state.articleList, article];
        this.setState({articleList: newList});
       //this.clearAllData();
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
        this.setState({articleList:[]});
    }

}