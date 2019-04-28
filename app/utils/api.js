/**
 * Ini merupakan fungsi httpClient
 * yang digunakan untuk melakukan request ke API Server
 */
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import JWTDecode from 'jwt-decode';
import Config from 'react-native-config';
import RNRestart from 'react-native-restart';
import oauth2 from './oauth2';

/**
 * Membuat axios instance
 * dan mengatur baseUrl ke API Endpoint
 */
const request = axios.create({
    baseURL: Config.API_ENDPOINT
});

/**
 * Interceptors
 * middleware ini dijalankan sebelum http client melakukan request
 * disini diatur semua request dengan http method post harus menggunakan
 * header authorization
 * disini juga dilakukan pengecekan apakah token sudah expired atau belum,
 * akan dilakukan refresh token jika token sudah expired dan ketika mendapatkan
 * token baru request akan dilanjutkan 
 */
request.interceptors.request.use(
    async config => {
        let originalRequest = config;
        /**
         * Jika http method post,
         * gunakan header authorization
         */
        if (originalRequest.method === 'post') {
            const _token = await AsyncStorage.getItem('accessToken');
            const expiredAt = await AsyncStorage.getItem('expToken');
            // Cek apakah token sudah expired
            const tokenIsExpired = parseInt(expiredAt) < Date.now() / 1000;
            // Refresh token ketika token sudah expired
            if (tokenIsExpired) {
                return issueToken().then(token => {
                    originalRequest.headers.authorization = 'Bearer ' + token.accessToken;
                    AsyncStorage.setItem('expToken', JWTDecode(token.accessToken).exp);
                    AsyncStorage.setItem('accessToken', token.accessToken);
                    AsyncStorage.setItem('refreshToken', token.refreshToken);
                    return Promise.resolve(originalRequest);
                });
            }
            // Menambahkan header authorization pada header
            config.headers.authorization = 'Bearer ' + _token;
        }
        // Kembalikan konfigurasi dan lanjutkan request ke API Server
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

/**
 * Fungsi ini digunakan untuk melakukan refresh token
 */
const issueToken = () =>
    new Promise((resolve, reject) => {
        /**
         * Mendapatkan value accessToken dan refreshToken dari AsyncStorage react
         */
        AsyncStorage.multiGet(['accessToken', 'refreshToken']).then(res => {
            const accessToken = res[0][1];
            const refreshToken = res[1][1];
            const oauth2Token = oauth2.createToken(accessToken, refreshToken);
            oauth2Token.refresh().then(token => {
                resolve(token);
            }).catch(err => {
                /**
                 * Jika refreshToken gagal, hapus accessToken dan refreshToken dari AsyncStorage,
                 * kemudian restart aplikasi
                 */
                AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'expToken']).then(res => {
                    RNRestart.Restart();
                    return Promise.reject(err);
                });
            });
        });
    });

export default request;


