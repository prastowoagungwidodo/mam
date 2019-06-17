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
    GET_FEATURED,
    GET_FEATURED_FAIL,
    GET_FEATURED_SUCCESS,
    GET_BYKEYWORD,
    GET_BYKEYWORD_FAIL,
    GET_BYKEYWORD_SUCCESS
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
    featured: [],
    loading: false,
    recipes: {}
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
            error: 'Galat! Gagal mengambil data terbaru'
        };
    case GET_FEATURED:
        return { ...state, loading: true, error: null };

    case GET_FEATURED_SUCCESS: {
        return {
            ...state,
            featured: action.payload.data.hits,
            loading: false,
            error: null
        };
    }
    case GET_FEATURED_FAIL:
        return {
            ...state,
            loading: false,
            error: 'Galat! Gagal mengambil data terbaru'
        };
    case GET_BYKEYWORD:
        return {
            ...state,
            loading: true,
            error: null
        };
    case GET_BYKEYWORD_FAIL:
        return {
            ...state,
            loading: false,
            error: 'Galat! Gagal mengambil data'
        };
    case GET_BYKEYWORD_SUCCESS: {
        let recipes = state.recipes;
        recipes[action.payload.config.params.q] = action.payload.data.hits;
        return {
            ...state,
            loading: false,
            recipes
        };
    }
    default:
        return state;
    }
};


