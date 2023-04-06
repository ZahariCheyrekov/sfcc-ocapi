export const BASE_URL = `${process.env.REACT_APP_HOST}/s/Sites-${process.env.REACT_APP_SITE}-Site/dw/shop/${process.env.REACT_APP_OCAPI_VERSION}`;

export const AUTH = `${BASE_URL}/customers/auth`;

export const CREATE_CART_URL = `${BASE_URL}/baskets`;

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