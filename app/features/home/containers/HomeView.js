/**
 * Ini merupakan tampilan Home dari aplikasi
 * Data masih menggunakan data dummy
 */
import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import TopBanner from '../components/TopBanner';
import HomeScrollView from '../components/HomeScrollView';
import BillingStatus from '../components/BillingStatus';
import CategoryLink from '../components/CategoryLink';
import GridView from '../../../components/GridView';

export default class HomeView extends PureComponent {
    render() {
        return (
            <HomeScrollView>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <TopBanner {...this.props}/>
                <BillingStatus { ...this.props }/>
                <CategoryLink { ...this.props }/>
                <GridView
                    {...this.props}
                    title="Trending"
                    subtitle="Cobain resep yang lagi hits"
                    data={this.props.latest}/>
                <GridView
                    {...this.props}
                    title="Terbaru"
                    subtitle="Cobain resep-resep terbaru"
                    data={this.props.latest}/>
            </HomeScrollView>
        );
    }
}
