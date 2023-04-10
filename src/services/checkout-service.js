import * as requester from '../api/requester';

import {
    CREATE_ORDER_URL,
    getAddBillingAddressUrl,
    getAddPaymentUrl,
    getAddShippingAddressUrl,
    getAddShippingMethodUrl,
    getPaymentMethodsUrl,
    getShippingMethodsUrl
} from '../constants/endpoints';

/**
 * @function
 * @param basketId Id of the given basket
 * @param  shippingData Data of the shipping address
 * @description Returns newly created cart with address in it
 * @returns {Promise<Object>} Cart with created shipping address in it
 */
export const addShippingAddress = async (basketId, shippingData) => {
    const cartWithAddress = await requester.put(
        getAddShippingAddressUrl(basketId),
        shippingData
    );
    return cartWithAddress;
};

/**
 * @function
 * @param basketId Id of the given basket
 * @param  shippingMethodId Id of the shipping method entered
 * @description Returns newly created cart with method in it
 * @returns {Promise<Object>} Cart with created shipping address in it
 */
export const addShippingMethod = async (basketId, shippingMethodId) => {
    const cartWithShippingMethod = await requester.put(
        getAddShippingMethodUrl(basketId), { id: shippingMethodId }
    );
    return cartWithShippingMethod;
};

/**
 * @function
 * @param basketId Id of the given basket
 * @description Retrieves all of the shipping methods for the current basket
 * @returns {Promise<Array>} Array of shipping methods
 */
export const getShippingMethods = async (basketId) => {
    const shippingMethods = await requester.get(getShippingMethodsUrl(basketId));
    return shippingMethods;
}

/**
 * @function
 * @param basketId Id of the given basket
 * @param billingAddressData Data with the billing information in it
 * @description Returns cart object with the new billing address in it
 * @returns {Promise<Object>} Cart object
 */
export const addBillingAddress = async (basketId, billingAddressData) => {
    const cartWithBillingAddress = await requester.put(
        getAddBillingAddressUrl(basketId),
        billingAddressData
    );
    return cartWithBillingAddress;
}

/**
 * @function
 * @param basketId Id of the given basket
 * @description Retrieves all of the payment methods for the current basket
 * @returns {Promise<Array>} Array of payment methods
 */
export const getPaymentMethods = async (basketId) => {
    const paymnetMethods = await requester.get(getPaymentMethodsUrl(basketId));
    return paymnetMethods;
}

/**
 * @function
 * @param basketId Id of the given basket
 * @description Adds a given payment to the basket
 * @returns {Promise<Object>} Payment object
 */
export const addPayment = async (basketId, paymnetObject) => {
    const payment = await requester.post(
        getAddPaymentUrl(basketId),
        paymnetObject
    );
    return payment;
}

/**
 * @function
 * @param basketId Id of the given basket
 * @description Makes order to the SF by sending the basket id as a body data
 * @returns {Promise<Object>} Object with order information
 */
export const createOrder = async (basketId) => {
    const order = await requester.post(CREATE_ORDER_URL, basketId);
    return order;
}
