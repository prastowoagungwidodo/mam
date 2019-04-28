/**
 * Disinilah data diproses,
 * setelah fungsi pada actions dijalankan,
 * maka reducers akan mengolah data dan menyimpannya ke dalam state
 * untuk dapat digunakan pada komponen-komponen react
 * Kami menggunakan redux-axios-middleware yang akan membuat dua buah
 * action type secara otomatis yaitu dengan prefix _FAIL (jika gagal)
 * dan _SUCCESS (jika berhasil)
 */
import {
    GET_LATEST,
    GET_LATEST_FAIL,
    GET_LATEST_SUCCESS,
} from './constants';

/**
 * Data awal
 */
const initialState = {
    profile: {
        id: '',
        name: '',
        email: '',
        photo: null
    },
    latest: [],
    loading: false,
};

/**
 * Reducers
 */
export default (state = initialState, action) => {
    switch (action.type) {
    case GET_LATEST:
        return { ...state, loading: true, error: null };

    case GET_LATEST_SUCCESS: {
        return {
            ...state,
            latest: action.payload.data.hits,
            loading: false,
            error: null
        };
    }
    case GET_LATEST_FAIL:
        return {
            ...state,
            loading: false,
            error: 'Galat! Gagal mengambil buku-buku terbaru'
        };
    default:
        return state;
    }
};


