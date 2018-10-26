import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Main from "./Components/Main";
import {createStackNavigator} from "react-navigation";
import Dashboard from './Components/Dashboard';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class App extends Component {
    render() {
        return <RootStack style={styles.container} />
    }
}

const RootStack = createStackNavigator({
    Main: {
        screen: Main
    },
    Dashboard: {
        screen: Dashboard
    }
});


