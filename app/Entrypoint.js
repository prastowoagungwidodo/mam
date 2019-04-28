/**
 * App Name
 * Di file inilah segala sesuatunya bermula :)
 * Aplikasi ini menggunakan redux sebagai state management
 * Kendala React adalah state yang terisolasi sehingga tidak dapat berbagi state
 * Dengan menggunakan redux maka setiap komponen dapat berbagi state (data)
 * Aplikasi ini juga menggunakan redux-persist yang bermanfaat untuk menyimpan state
 * yang statis / digunakan sebagai cache agar aplikasi tidak melakukan request berkali-kali
 * 
 * *    PersistGate merupakan provider dari redux-persist yang akan menampilkan <ActivityIndicator/>
 *      atau loading icon pada saat redux-persist melakukan pengecekan state dan meloadnya kedalam
 *      state management (redux)
 * 
 * *    Store merupakan kumpulan state
 * *    Navigator merupakan navigasi aplikasi, karena setiap halaman pada aplikasi react-native seperti
 *      sebuah layer yang bertumpuk atau berjejer, untuk berpindah kita menggunakan react-navigation
 * *    PaperProvider merupakan provider dari react-native-paper yang merupakan library Material Design
 *      yang dapat diimplementasikan baik di android maupun ios. ini merupakan UI Library
 * 
 * StoreProvider diletakan paling awal agar state dapat diakses dimana saja.
 */
import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './store';

/**
 * Mengambil data persistor dan store dari file app/store/index
 * persistor merupakan komponen dari redux-persist
 * sedangkan store merupakan kumpulan state dari redux
 */
const { persistor, store } = configureStore();

/**
 * Membuat style loading indikator
 * View nya menggunakan posisi absolute dan nilai posisinya 0 disemua sisi
 * agar memenuhi layar
 * Sedangkan alignItems center dan justifyContent center digunakan agar
 * ActivityIndicator tepat berada ditengah-tengah layar
 */
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

/**
 * Karena ini merupakan komponen sederhana dan tidak membutuhkan deteksi props 
 * maka kita gunakan PureComponent saja
 */
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
