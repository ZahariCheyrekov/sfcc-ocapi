export const BASE_URL = `${process.env.REACT_APP_HOST}/s/Sites-${process.env.REACT_APP_SITE}-Site/dw/shop/${process.env.REACT_APP_OCAPI_VERSION}`;

export const AUTH = `${BASE_URL}/customers/auth`;

export const getContentAssetUrl = (cid) => `${BASE_URL}/content/${cid}`;

export const getProductUrl = (pid) => `${BASE_URL}/products/${pid}?expand=availability,prices,images,variations,bundled_products`;
