import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DetailMetaStyles';
import { colors } from 'app/config/themes';

export default class DetailMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0,
            averageRate: 0,
        };
    }

    componentDidMount(){
        this._calculateRate();
    }

    _calculateRate(){
        const review = this.props.review || [];
        let view = 0;
        let totalRate = 0;
        let averageRate = 0;
        review.map(reviewObj => {
            view += 1;
            totalRate += reviewObj.rate;
        });
        if (totalRate > 0) {
            averageRate = Math.floor(totalRate/view);
        }
        this.setState({
            view,
            averageRate
        });
    }

    render(){
        const { recipe } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Title>Sajian</Title>
                    <Caption style={styles.caption}>
                        {recipe.yield}
                    </Caption>
                </View>
                <View style={styles.item}>
                    <Title>Kalori</Title>
                    <Caption style={styles.caption}>
                        {recipe.calories.toFixed(0) + " Cal"}
                    </Caption>
                </View>
                <View style={styles.item}>
                    <Title>Berat</Title>
                    <Caption style={styles.caption}>
                        {recipe.totalWeight.toFixed(0) + " gr"}
                    </Caption>
                </View>
            </View>
        );
    }
}

