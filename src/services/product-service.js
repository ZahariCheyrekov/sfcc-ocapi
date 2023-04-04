import * as requester from '../api/requester';
import {getProductUrl } from '../constants/endpoints';

/**
 * @function
 * @description Returns product from the BM by the given pid
 * @param {String} pid - Id of the given product
 * @returns {Promise<Object>} Product result
 */
export const getProduct = async (pid) => {
    const product = await requester.get(getProductUrl(pid));
    return product;
};

