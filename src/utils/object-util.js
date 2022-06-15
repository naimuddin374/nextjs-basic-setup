export const objIsNotEmpty = (obj = null) => obj && Object.keys(obj).length !== 0;

export const deepCloneObj = (obj) => JSON.parse(JSON.stringify(obj));
