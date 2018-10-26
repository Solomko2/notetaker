import React from "react";
import {Component} from "react";
import {Text, View} from 'react-native';

export default class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation.getParam('userInfo'));
        return {
            title: navigation.getParam('title', 'A Nested Details Screen'),
        };
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Dashboard component work</Text>
            </View>
        );
    }
}