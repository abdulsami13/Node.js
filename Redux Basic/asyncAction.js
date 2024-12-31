const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
    loading: false,
    user: [],
    error: ""
};

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    };
};

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    };
};

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload
            };
        default:
            return state;
    }
};

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const user = response.data.map(user => user.id);
                dispatch(fetchUserSuccess(user));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchUsers());
