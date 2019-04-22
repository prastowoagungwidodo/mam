import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import JWTDecode from 'jwt-decode';
import Config from 'react-native-config';
import RNRestart from 'react-native-restart';
import oauth2 from './oauth2';

const request = axios.create({
    baseURL: Config.API_ENDPOINT
});

request.interceptors.request.use(
    async config => {
        console.log(config);
        let originalRequest = config;
        if (originalRequest.method === 'post' || originalRequest.url === '/order/status' || originalRequest.url === '/order/library') {
            const _token = await AsyncStorage.getItem('accessToken');
            const expiredAt = await AsyncStorage.getItem('expToken');
            const tokenIsExpired = parseInt(expiredAt) < Date.now() / 1000;
            if (tokenIsExpired) {
                return issueToken().then(token => {
                    originalRequest.headers.authorization = 'Bearer ' + token.accessToken;
                    AsyncStorage.setItem('expToken', JWTDecode(token.accessToken).exp);
                    AsyncStorage.setItem('accessToken', token.accessToken);
                    AsyncStorage.setItem('refreshToken', token.refreshToken);
                    return Promise.resolve(originalRequest);
                });
            }
            config.headers.authorization = 'Bearer ' + _token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

const issueToken = () =>
    new Promise((resolve, reject) => {
        AsyncStorage.multiGet(['accessToken', 'refreshToken']).then(res => {
            const accessToken = res[0][1];
            const refreshToken = res[1][1];
            const oauth2Token = oauth2.createToken(accessToken, refreshToken);
            oauth2Token.refresh().then(token => {
                resolve(token);
            }).catch(err => {
                AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'expToken']).then(res => {
                    RNRestart.Restart();
                    return Promise.reject(err);
                });
            });
        });
    });

export default request;


