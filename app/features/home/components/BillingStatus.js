import React from 'react';
import { View } from 'react-native';
import { DefaultTheme, Divider, Subheading, Title, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import numeral from 'numeral';
import { getBilling } from '../../../store/actions';

class BillingStatus extends React.PureComponent{
    componentDidMount() {
        if (this.props.profile && this.props.profile.id !== '') {
            this.props.getBilling();
        }
    }

    topUp() {
        this.props.navigations.navigate('BILLING');
    }

    render() {
        if (this.props.profile && this.props.profile.id !== '') {
            return (
                <View style={{
                    flexDirection: 'column',
                    marginVertical: 16,
                    paddingHorizontal: 16
                }}>
                    <Subheading>Saldo ibuk Anda:</Subheading>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 16
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="cash" size={24} style={{ marginRight: 8, color: '#4CAF50' }}/>
                            <Title style={{ color: DefaultTheme.colors.primary }}>
                                { this.props.billing.balance === 0 ? '0.00' : numeral(this.props.billing.balance).format('0,0') }
                            </Title>
                        </View>
                        <View style={{
                            width: 150,
                            paddingLeft: 16
                        }}>
                            <Button
                                color={DefaultTheme.colors.primary}
                                onPress={() => this.topUp()}
                                icon="add"
                                mode="outlined">
                                Isi saldo
                            </Button>
                        </View>
                    </View>
                    <Divider/>
                </View>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    ...state.nav,
    ...state.app
});
const mapDispatchToProps = () => ({
    getBilling
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingStatus);

