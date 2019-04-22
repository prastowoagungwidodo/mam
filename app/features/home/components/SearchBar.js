import React, { Component } from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { Colors, Text } from 'react-native-paper';
import Octicon from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 36
    },
    input: {
        alignItems: 'center',
        backgroundColor: Colors.grey200,
        borderRadius: 8,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        fontFamily: 'Product Sans',
        height: 36,
        marginLeft: 16,
        marginRight: 32,
        paddingHorizontal: 8,
    },
    placeholder: {
        color: Colors.grey400,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 8,
    }
});

export default class SearchBar extends Component {
    render(){
        return(
            <TouchableHighlight style={styles.container}>
                <View style={styles.input}> 
                    <Octicon name="search" size={18} color="gray"/>
                    <Text style={styles.placeholder}>Mau masak apa hari ini?</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
