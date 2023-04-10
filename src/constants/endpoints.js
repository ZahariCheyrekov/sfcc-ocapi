export const BASE_URL = `${process.env.REACT_APP_HOST}/s/Sites-${process.env.REACT_APP_SITE}-Site/dw/shop/${process.env.REACT_APP_OCAPI_VERSION}`;

export const AUTH = `${BASE_URL}/customers/auth`;

export const CREATE_CART_URL = `${BASE_URL}/baskets`;

export const CREATE_ORDER_URL = `${BASE_URL}/orders`;

/**
 * @function
 * @param {String} cid Id of the given content asset
 * @returns {String} Content Asset url
*/
export const getContentAssetUrl = (cid) =>
    `${BASE_URL}/content/${cid}`;

/**
 * @function
 * @param {String} pid Id of the given product
 * @returns {String} Product details url 
*/
export const getProductUrl = (pid) =>
    `${BASE_URL}/products/${pid}?expand=availability,prices,images,variations,bundled_products`;

/**
 * @function
 * @param {String} basketId Id of the created basket
 * @returns {String} Url of the current basket with items in it
*/
export const getAddProductUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/items`;

/**
 * @function
 * @param {String} basketId Id of the given basket
 * @param {String} productId Id of the product to be removed
 * @returns {String} Basket url for product removal
*/
export const getRemoveProductUrl = (basketId, productId) =>
    `${BASE_URL}/baskets/${basketId}/items/${productId}`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Basket url for adding a shipping address
*/
export const getAddShippingAddressUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/shipments/me/shipping_address`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Basket url for adding a shipping method
*/
export const getAddShippingMethodUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/shipments/me/shipping_method`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Returns url for getting all of the basket shipping methods
*/
export const getShippingMethodsUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/shipments/me/shipping_methods`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Returns url for adding billing address to the order
*/
export const getAddBillingAddressUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/billing_address`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Returns url for getting all of the basket payment methods
*/
export const getPaymentMethodsUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/payment_methods`;

/**
* @function
* @param {String} basketId Id of the given basket
* @returns {String} Returns url for adding paymnet
*/
export const getAddPaymentUrl = (basketId) =>
    `${BASE_URL}/baskets/${basketId}/payment_instruments`;


