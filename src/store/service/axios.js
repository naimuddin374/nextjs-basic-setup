import axios from 'axios';
import router from 'next/router';
import swal from 'sweetalert';
import { API_MAX_TIMEOUT, API_URL, SECRET_KEY } from '../../config';
import store from '../index';


const date = Date.now();
const time = Math.floor(date / 1000);

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: API_MAX_TIMEOUT,
    headers: {
        "Content-Type": "application/json",
    }
});

export const setAuthToken = (token = null) => {
    // if (token && token.length) {
    //     axiosInstance.defaults.headers.common['x-access-token'] = token || '';
    // } else {
    //     delete axiosInstance.defaults.headers.common['x-access-token'];
    // }
};



// SUCCESS RESPONSE HANDLER
const successResponseHandler = res => {
    if (res?.data?.status === 'failed') {
        if (res?.data?.code === 'TokenExpiredError') {
            store.getActions().auth.refreshToken();
        }
        swal('Error!', res.data.message || 'Something error occurred!', 'error');
        return {
            st: false,
        };
    }
    res.data.st = true;
    return res.data;
};


// ERROR RESPONSE HANDLER
const errorResponseHandler = res => {
    if (res.response?.data?.code === "TokenExpiredError") {
        store.getActions().auth.refreshToken();
        setTimeout(() => {
            router.reload();
        }, 1500);
    }
    if (res.response?.data?.code === "MultiDeviceLoginDetected") {
        store.getActions().auth.logout({ goToHome: () => router.push('/home') });
    }
    if (res.response?.data?.message) {
        swal('Error!', res.response.data.message || 'Something went wrong!', 'error');
    }
    return {
        ...res?.response?.data,
        st: false
    };
};





// GET REQUEST TO GET DOCUMENTS FROM SERVER
export const getRequest = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return successResponseHandler(response);
    } catch (error) {
        return errorResponseHandler(error);
    }
};


// POST REQUEST TO INSERT NEW DOCUMENT
export const postRequest = async (url, formData) => {
    try {
        const response = await axiosInstance.post(url, formData);
        return successResponseHandler(response);
    } catch (error) {
        return errorResponseHandler(error);
    }
};


// PUT REQUEST TO UPDATE DOCUMENT
export const putRequest = async (url, formData) => {
    try {
        const response = await axiosInstance.put(url, formData);
        return successResponseHandler(response);
    } catch (error) {
        return errorResponseHandler(error);
    }
};


// DELETE REQUEST TO REMOVE DOCUMENT
export const deleteRequest = async (url) => {
    try {
        const response = await axiosInstance.delete(url);
        return successResponseHandler(response);
    } catch (error) {
        return errorResponseHandler(error);
    }
};



export default axiosInstance;
