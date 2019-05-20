import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Caption } from 'react-native-paper';
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
                    <Icon size={24} name="content-copy" color={colors.primary} />
                    <Caption>
                        {recipe.yield}
                    </Caption>
                </View>
                <View style={styles.item}>
                    <Icon size={24} name="fire" color={colors.primary} />
                    <Caption>
                        {recipe.calories.toFixed(0) + " Cal"}
                    </Caption>
                </View>
                <View style={styles.item}>
                    <Icon size={24} name="arrow-down-bold-box-outline" color={colors.primary} />
                    <Caption>
                        {recipe.totalWeight.toFixed(0) + " gr"}
                    </Caption>
                </View>
            </View>
        );
    }
}

