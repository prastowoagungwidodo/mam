import React from 'react';
import { StyleSheet, View, TouchableHighlight, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import Images from '../../../config/images';

// Calculate Ratio
const imageWidth = Dimensions.get('window').width;
const imageHeight = (imageWidth/960) * 390;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        paddingBottom: 0,
    } 
});

const { banner } = Images;

export default class TopBanner extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }

    _renderItem({ item }) {
        return (
            <TouchableHighlight>
                <FastImage
                    style={{
                        width: imageWidth,
                        height: imageHeight
                    }}
                    source={item.uri}/>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                <Carousel
                    data={banner}
                    containerCustomStyle={{ flexGrow: 0 }}
                    renderItem={this._renderItem}
                    sliderWidth={imageWidth}
                    itemWidth={imageWidth}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    inactiveSlideScale={1}
                />
            </View>
        );
    }
}


