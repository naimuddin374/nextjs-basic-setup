import { thunk, action } from 'easy-peasy';
import { getRequest, postRequest, setAuthToken } from '../service/axios';
import { BASE_URL } from '../../config';


const AuthModel = {
    isAuth: false,
    user: {},
    login: thunk(async (actions, payload) => {
    }),
    logout: thunk(async (_actions, payload, { getState, getStoreState }) => {

        // CLEAR AUTH MODEL
        getState().user = {};
        getState().isAuth = false;

        // REMOVE AUTH TOKEN
        setAuthToken();
    }),
};
export default AuthModel;
