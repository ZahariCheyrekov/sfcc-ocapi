import { getAccessToken } from "../services/ocapi-service";

export const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {
            'Authorization': await getAccessToken(),
            'Content-Type': 'application/json',
            'x-dw-client-id': `${process.env.REACT_APP_CLIENT_ID}`,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');





