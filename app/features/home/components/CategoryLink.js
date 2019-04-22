import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16
    },
    item: {
        marginRight: 8
    }
});
export default class CategoryLink extends Component {
    render(){
        return (
            <ScrollView horizontal={true} style={styles.container}>
                <TouchableOpacity>
                    <Chip mode="flat" style={styles.item}>Nasi Goreng</Chip>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Chip mode="flat" style={styles.item}>Olahan Daging</Chip>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Chip mode="flat" style={styles.item}>Steak</Chip>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Chip mode="flat" style={styles.item}>Bakmie Spesial</Chip>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
