/**
 * App Name
 * Everthing starts from the entrypoint
 */
import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './store';

const { persistor, store } = configureStore();
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class Entrypoint extends PureComponent {
    render() {
        return (
            <StoreProvider store={store}>
                <PersistGate
                    loading={<View style={styles.loading}><ActivityIndicator size="large"/></View>}
                    persistor={persistor}>
                    <PaperProvider>
                        <Navigator />
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        );
    }
}
