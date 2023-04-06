import jwt_decode from 'jwt-decode';

/**
 * @function
 * @description Returns true if the access token is valid 
 * @param {String} token Access token in the local storage
 * @returns {boolean} Returns access token for the current user
 */
export const validateToken = (token) => {
    let isValid = false;

    if (token) {
        const decoded = jwt_decode(token);
        const expires = Number(decoded.exp + '000');

        const time = Date.now();
        isValid = time <= expires;
    }

    return isValid;
};
