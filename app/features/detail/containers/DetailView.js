import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Title, Checkbox, List, Divider } from 'react-native-paper';
import DetailOverview from '../components/DetailOverview';
import DetailMeta from '../components/DetailMeta';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 128
    },
    title: {
        paddingHorizontal: 16
    },
    divider: {
        marginVertical: 8
    }
});
export default class DetailView extends Component {
    render(){
        return(
            <ScrollView 
                style={styles.container}
                automaticallyAdjustContentInsets={false}>
                <DetailOverview {...this.props}/>
                <Divider style={styles.divider}/>
                <DetailMeta {...this.props}/>
                <Divider style={styles.divider}/>
                <Title style={styles.title}>Bahan-bahan</Title>
                <View style={{ flex: 1 }}>
                    { this.props.recipe.ingredientLines.map((bahan, idx) => (
                        <List.Item
                            key={'bahan-'+idx}
                            title={bahan}
                            left={props => <Checkbox status='unchecked'/> }/>
                    ))}                
                </View>
            </ScrollView>
        );
    }    
}
