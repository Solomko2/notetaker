import React from "react";
import {Component} from "react";
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import api from '../Utils/api';

class Main  extends Component {
    static navigationOptions = {
        title: 'Main',
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Search for a Github User</Text>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.username} onChange={this.handleChange.bind(this)} />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}>
                    <Text>Search</Text>
                </TouchableHighlight>
            </View>
        )
    }

    handleChange(event) {
        this.setState({
            username: event.nativeEvent.text
        })
    }

    async handleSubmit() {
        this.setState({
            isLoading: true
        });

         const res = await api.getBio(this.state.username);

         if(res.message === "Not Found") {
             this.setState({
                 isLoading: false,
                 error: 'User Not Found'
             });
         } else {
             this.props.navigation.navigate('Dashboard', {
                 title: res.name || 'Select an option',
                 userInfo: res
             });

             this.setState({
                 isLoading: false,
                 error: false,
                 username: ''
             });
         }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

export default Main;