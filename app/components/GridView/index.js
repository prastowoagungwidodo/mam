/**
 * GridView komponen ini digunakan untuk menampilkan daftar resep dihalaman awal.
 */
import React from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { DefaultTheme, Title, Caption, TouchableRipple, Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import numeral from 'numeral';
import styles from './styles';

const imgWidth = 100;
const imgHeight = (imgWidth / 240) * 346;

export default class GridView extends React.PureComponent {
    constructor(props) {
        super(props);
        this._navigate = this._navigate.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }

    _navigate(target, options) {
        this.props.navigation.navigate(target, options);
    }

    _renderItem(item) {
        if (item.deleted) {
            return null;
        }
        return (
            <TouchableOpacity
                key={item.id}
                style={styles.grid}
                onPress={() => this._navigate('Detail', { recipe: item.recipe })}
            >
                <View style={styles.shadow}>
                    <FastImage
                        style={styles.gridImage}
                        source={{
                            uri: item.recipe.image || 'https://picsum.photos/200/300',
                            cache: FastImage.cacheControl.immutable
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
                    <Text
                        style={ styles.menuTitle }
                        numberOfLines={2}>
                        {item.recipe.label}
                    </Text>
                    <Caption numberOfLines={1}>
                        {(item.recipe.source || 'No Name')}
                    </Caption>
                </View>
            </TouchableOpacity>
        );
    }

  _keyExtractor = item => {
      const uniqKey = item.recipe.uri;
      const splitUniqKey = uniqKey.split('#');
      return splitUniqKey[1];
  };
  render() {
      const { title, subtitle, data, icon } = this.props;
      if (!data || data.length === 0) {
          return null;
      }
      return (
          <View style={styles.container}>
              <View style={styles.title}>
                  <View style={{ flexDirection: 'column'}}>
                      <Title>
                          {title}
                      </Title>
                      <Text style={styles.subtitle}>
                          { subtitle }
                      </Text>
                  </View>
                  <TouchableRipple
                      onPress={() =>
                          this.props.navigation.navigate('CATEGORY_DETAIL', {
                              category: {
                                  name: title,
                                  code: icon
                              }
                          })
                      }
                      rippleColor="rgba(0, 0, 0, .32)"
                  >
                      <Text style={styles.moreText}>Lainnya...</Text>
                  </TouchableRipple>
              </View>
              <FlatList
                  data={data}
                  renderItem={({ item }) => this._renderItem(item)}
                  horizontal={true}
                  keyExtractor={this._keyExtractor}
                  style={{ paddingVertical: 8, paddingHorizontal: 6 }}
              />
          </View>
      );
  }
}

