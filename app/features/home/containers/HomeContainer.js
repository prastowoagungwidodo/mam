/**
 * Ini merupakan halaman awal dari aplikasi
 * yang menampilkan list resep
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { getLatest } from '../../../store/actions';
import HomeView from './HomeView';
import styles from './HomeStyles';
import SearchBarComponent from '../components/SearchBar';

class HomeContainer extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
          title: 'Home',
          headerTitle: <SearchBarComponent { ...this.props }/>,
          headerRight: (
              <View style={ styles.headerRightContainer }>
                  <Icon.Button
                      style={ styles.headerRightBtn }
                      color="gray"
                      size={24}
                      name="bell-outline"
                      backgroundColor="transparent">
                  </Icon.Button>
                  <Icon.Button
                      style={ styles.headerRightBtn }
                      color="gray"
                      size={24}
                      name="heart-outline"
                      backgroundColor="transparent">
                  </Icon.Button>
              </View>
          ),
          headerTintColor: '#fff',
          headerStyle: {
              elevation: 0,
              backgroundColor: '#fff',
              borderBottomWidth: 0,
              shadowColor: 'transparent'
          }
      };
  };

  /**
   * Contoh data saja
   * Mengambil resep-resep steak
   */
  componentDidMount(){
      this.props.getLatest('steak');
  }

  /**
   * View / Tampilan Home
   */
  render() {
      return <HomeView {...this.props} />;
  }
}

/**
 * Mengambil state dari redux
 * @param {Object} state 
 */
const mapStateToProps = state => ({
    ...state.app
});

/**
 * Mengambil action
 */
const mapDispatchToProps = {
    getLatest
};

/**
 * Menghubungkan state dan action ke HomeComponent
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
