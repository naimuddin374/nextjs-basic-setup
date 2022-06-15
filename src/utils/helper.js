import axios from 'axios';
import { format } from 'date-fns';


export const makeid = (length) => {
    let text = "";
    for (let i = 0; i < length; i++) {
        text += SECRET_KEY.charAt(Math.floor(Math.random() * SECRET_KEY.length));
    }
    return text;
};





// export const resizeFile = (file) =>
//     new Promise((resolve) => {
//         Resizer.imageFileResizer(
//             file,
//             600,
//             400,
//             "JPEG",
//             100,
//             0,
//             (uri) => {
//                 resolve(uri);
//             },
//             "file",
//         );
//     });

export const dateTime = (date = null, type = 1) => {
    if (new Date(date).toString() === 'Invalid Date') {
        return null;
    }
    try {
        if (type === 1) {
            return format(new Date(date), 'MMM dd, yyyy kk:mm aaa');
        }
        if (type === 2) {
            return format(new Date(date), 'MMM dd, yyyy');
        }
        if (type === 3) {
            return format(new Date(date), 'kk:mm aaa');
        }
        if (type === 4) {
            return format(new Date(date), 'yyyy');
        }
        return date;
    } catch (_e) {
        return null;
    }
};


export const textLimit = (text = '', limit = 30) => {
    if (!text) return null;
    return text.length > limit ? `${text.substring(0, limit)} ...` : text;
};


export const makeURL = (str = '') => {
    try {
        if (!str) return '';
        str = str.replace(/[^A-Z0-9]/gi, ' ').toLocaleLowerCase();
        str = str.replaceAll(' ', '-');
        str = str.replaceAll('---', '-');
        str = str.replaceAll('--', '-');
        return str;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const capitalizeFirstLetter = (string = '') =>
    string.charAt(0).toUpperCase() + string.slice(1);


export const isJsonString = (str) => {
    if (!str) {
        return null;
    }
    try {
        if (JSON.parse(str)) {
            return JSON.parse(str);
        }
        return new Array(str);

    } catch (e) {
        return null;
    }
};


export const amountFormat = (amount = 0) => `৳${amount} BDT`;

export const serverSideResponse = (obj) => ({
    props: {
        data: obj
    }
});
