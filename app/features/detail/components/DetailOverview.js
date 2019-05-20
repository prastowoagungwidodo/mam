import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import styles from './DetailOverviewStyles.js';

const defaultCover = 'https://picsum.photos/200/300?random';

export default class DetailOverview extends Component {
    render(){
        const { recipe } = this.props;
        console.log(recipe);
        return(
            <View style={styles.top}>
                <View style={styles.coverContainer}>
                    <View style={styles.coverShadow}>
                        <FastImage
                            source={{ 
                                uri: recipe.image || defaultCover
                            }}
                            style={styles.coverImage}
                        />
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Title>{recipe.label}</Title>
                    <View style={styles.metaDescription}>
                        <Icon 
                            name="account-box-outline"
                            size={14} 
                            style={styles.metaDescriptionIcon}/>
                        <Caption numberOfLines={1}>
                            {recipe.source}
                        </Caption>
                    </View>
                    <View style={styles.subjectContainer}>
                        { recipe.healthLabels.map((subject, index) => (
                            <Caption key={"sub"+index} style={ styles.chip }>
                                {subject}
                            </Caption>
                        )) }
                    </View>
                </View>
            </View>
        );
    }
}

