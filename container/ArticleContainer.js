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

    //function to delete an article out of the reading list. For that filter function is used against the key.
    //notice the key of each list is always just the index in the list, therefore it is used in this case too.
    deleteArticle= key=>{
        const updatedList=this.state.articleList.filter((theArticle,index) => index !==key)

        this.setState({articleList: updatedList});

        Alert.alert('The Article has been succesfully deleted.');

    };
    //this function deletes the current list of articles. Mainly used for debugging purposes but implemented as a user function too.
    clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
        this.setState({articleList: []});
    }


    //required field for making the container persistent.
    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };


}