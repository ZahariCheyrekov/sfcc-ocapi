import * as requester from '../api/requester';

import {
    AUTH,
    getContentAssetUrl
} from '../constants/endpoints';
import { validateToken } from '../utils/validateToken';

/**
 * @function
 * @description Returns access token for the current user
 * @returns {String} Access Token
 */
export const getAccessToken = async () => {
    const currentToken = localStorage.getItem('token');
    const isValid = validateToken(currentToken);

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-dw-client-id': `${process.env.REACT_APP_CLIENT_ID}`,
        },
    };

    if (isValid) {
        request.headers.Authorization = currentToken;
    }

    const type = isValid ? 'refresh' : 'guest';
    const body = { type };
    request.body = JSON.stringify(body);

    try {
        const response = await fetch(AUTH, request);
        const token = response.headers.get('authorization');

        localStorage.setItem('token', token);
        return token;

    } catch (err) {
        console.log(err);
    }
};

/**
 * @function
 * @description Returns content asset from the BM by the given cid
 * @param {String} cid Id of the given content asset
 * @returns {Promise<Object>} Content Asset's body
 */
export const getContentAsset = async (cid) => {
    const asset = await requester.get(getContentAssetUrl(cid));
    return asset.c_body;
};