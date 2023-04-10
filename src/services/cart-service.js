import * as requester from '../api/requester';

import {
    CREATE_CART_URL,
    getAddProductUrl,
    getRemoveProductUrl
} from '../constants/endpoints';

/**
 * @function
 * @description Returns newly created cart
 * @returns {Promise<Object>} Created cart object
 */
export const createCart = async () => {
    const cart = await requester.post(CREATE_CART_URL);
    return cart;
};

/**
 * @function
 * @description Accepts basketId and productData, it adds the given product to the basket
 * @param {String} basketId Id of the given basket
 * @param {Array} productData Array including data of the product added
 * @returns {Promise<Object>} Current basket with the added product in it
 */
export const addProductToCart = async (basketId, productData) => {
    const cart = await requester.post(getAddProductUrl(basketId), productData);
    return cart;
};

/**
 * @function
 * @description Accepts basketId and productId and removes given product from the basket
 * @param {String} basketId Id of the given basket
 * @param {String} productId Id of the product to remove
 * @returns {Promise<Object>} Current basket without the removed product 
 */
export const removeProductFromCart = async (basketId, productId) => {
    const cart = await requester.del(getRemoveProductUrl(basketId, productId));
    return cart;
};
