import {
    GET_LATEST,
    GET_LATEST_FAIL,
    GET_LATEST_SUCCESS,
} from './constants';

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


