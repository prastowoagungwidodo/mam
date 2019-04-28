/**
 * Actions disini merupakan kumpulan fungsi-fungsi yang digunakan untuk
 * berkomunikasi dengan API Server
 * action type harus sesuai dengan yang ada pada reducers untuk itu kita 
 * gunakan konstanta yang disimpan pada file app/store/constants
 */
import Config from 'react-native-config';
import {
    GET_LATEST,
} from './constants';

/**
 * Mendapatkan resep-resep terbaru berdasarkan keyword tertentu
 *  
 * @param {String} keyword 
 */
export const getLatest = (keyword) => ({
    type: GET_LATEST,
    payload: {
        request: {
            url: '/search',
            params: {
                q: keyword,
                r: 'http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408',
                app_id: Config.API_APP_ID,
                app_key: Config.API_APP_KEY
            }
        }
    }
});

