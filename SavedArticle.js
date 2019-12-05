import React from 'react';
import { Text, View, Button, Linking} from 'react-native';

export default class SavedArticle extends React.Component{
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
            <Text>Distance to my current location: {this.props.distance} meter</Text>
            </View>
        )

    }
}