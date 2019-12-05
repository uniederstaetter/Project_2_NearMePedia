import React from 'react';
import { Text, View, Button, Linking} from 'react-native';

export default class NoLocationArticle extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <View>
                <Button
                    title={this.props.article.title}
                    onPress={() => {
                        Linking.openURL('https://en.wikipedia.org/wiki/' + this.props.article.title)
                    }}
                />
            </View>
        )

    }
}