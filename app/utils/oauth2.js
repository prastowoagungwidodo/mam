/**
 * Ini akan digunakan sebagai authentikasi ke authorization server (Oauth2 Server)
 * Saat ini belum dipakai
 */
import ClientOauth2 from 'ag-client-oauth2';
import Config from 'react-native-config';

const oauth2 = new ClientOauth2({
    clientId: Config.AUTH_CLIENT_ID,
    clientSecret: Config.AUTH_CLIENT_SECRET,
    accessTokenUri: Config.AUTH_ACCESSTOKEN_URI,
    authorizationUri: Config.AUTH_AUTHORIZATION_URI,
    redirectUri: Config.AUTH_REDIRECT_URI,
    scopes: Config.AUTH_SCOPE
});

export default oauth2;


